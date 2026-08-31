const db = require('../config/database');

async function validateCoupon(req, res, next) {
  try {
    const { code, subtotal } = req.body;
    if (!code) {
      return res.status(400).json({ success: false, message: 'Coupon code required.' });
    }

    const coupon = await db.get(
      'SELECT * FROM coupons WHERE UPPER(code) = ? AND is_active = 1',
      [code.toUpperCase().trim()]
    );

    if (!coupon) {
      return res.status(404).json({ success: false, message: 'Invalid or expired coupon code.' });
    }

    const currentSubtotal = parseFloat(subtotal) || 0;
    if (currentSubtotal < coupon.min_purchase) {
      return res.status(400).json({
        success: false,
        message: `Minimum purchase amount of $${coupon.min_purchase} required for this coupon.`
      });
    }

    let discount = 0;
    if (coupon.discount_percent > 0) {
      discount = (currentSubtotal * coupon.discount_percent) / 100;
    } else if (coupon.discount_amount > 0) {
      discount = coupon.discount_amount;
    }

    res.json({
      success: true,
      code: coupon.code,
      discount: Math.min(discount, currentSubtotal),
      message: `Coupon '${coupon.code}' applied successfully!`
    });
  } catch (err) {
    next(err);
  }
}

async function placeOrder(req, res, next) {
  try {
    const userId = req.user.id;
    const {
      shipping_name,
      shipping_address,
      shipping_city,
      shipping_postal,
      payment_method,
      coupon_code,
      direct_item // Optional for direct "Buy Now" flow
    } = req.body;

    if (!shipping_name || !shipping_address || !shipping_city || !shipping_postal) {
      return res.status(400).json({ success: false, message: 'Complete shipping details are required.' });
    }

    let itemsToOrder = [];

    if (direct_item && direct_item.product_id) {
      const prod = await db.get('SELECT * FROM products WHERE id = ?', [direct_item.product_id]);
      if (!prod) return res.status(404).json({ success: false, message: 'Product not found.' });
      itemsToOrder.push({
        product_id: prod.id,
        product_name: prod.name,
        price: prod.price,
        quantity: direct_item.quantity || 1,
        size: direct_item.size || '10',
        color: direct_item.color || 'Standard',
        image_url: JSON.parse(prod.images || '[]')[0],
        stock_quantity: prod.stock_quantity
      });
    } else {
      // Fetch user cart
      const cartSql = `
        SELECT ci.*, p.name as product_name, p.price, p.images, p.stock_quantity
        FROM cart_items ci
        JOIN products p ON ci.product_id = p.id
        WHERE ci.user_id = ?
      `;
      const cartRows = await db.all(cartSql, [userId]);
      if (cartRows.length === 0) {
        return res.status(400).json({ success: false, message: 'Your shopping cart is empty.' });
      }

      itemsToOrder = cartRows.map(row => ({
        product_id: row.product_id,
        product_name: row.product_name,
        price: row.price,
        quantity: row.quantity,
        size: row.size,
        color: row.color,
        image_url: JSON.parse(row.images || '[]')[0],
        stock_quantity: row.stock_quantity
      }));
    }

    // Verify stock availability
    for (const item of itemsToOrder) {
      if (item.stock_quantity < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Insufficient stock for ${item.product_name}. Only ${item.stock_quantity} available.`
        });
      }
    }

    // Compute totals
    const subtotal = itemsToOrder.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    let discount = 0;

    if (coupon_code) {
      const coupon = await db.get(
        'SELECT * FROM coupons WHERE UPPER(code) = ? AND is_active = 1',
        [coupon_code.toUpperCase().trim()]
      );
      if (coupon && subtotal >= coupon.min_purchase) {
        if (coupon.discount_percent > 0) discount = (subtotal * coupon.discount_percent) / 100;
        else if (coupon.discount_amount > 0) discount = coupon.discount_amount;
      }
    }

    const shipping_fee = subtotal > 200 ? 0 : 15;
    const total_amount = Math.max(0, subtotal - discount + shipping_fee);
    const order_number = `SS-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;

    // Create Order Record
    const orderRes = await db.run(
      `INSERT INTO orders 
       (order_number, user_id, status, subtotal, discount, shipping_fee, total_amount, coupon_code, shipping_name, shipping_address, shipping_city, shipping_postal, payment_method)
       VALUES (?, ?, 'Pending', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [order_number, userId, subtotal, discount, shipping_fee, total_amount, coupon_code || null, shipping_name, shipping_address, shipping_city, shipping_postal, payment_method || 'Credit Card']
    );

    const orderId = orderRes.id;

    // Create Order Items & Update Product Inventory
    for (const item of itemsToOrder) {
      await db.run(
        `INSERT INTO order_items (order_id, product_id, product_name, price, quantity, size, color, image_url)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [orderId, item.product_id, item.product_name, item.price, item.quantity, item.size, item.color, item.image_url]
      );

      // Decrement stock & log inventory
      const newStock = item.stock_quantity - item.quantity;
      await db.run('UPDATE products SET stock_quantity = ? WHERE id = ?', [newStock, item.product_id]);
      await db.run(
        `INSERT INTO inventory_logs (product_id, change_amount, reason, previous_stock, new_stock)
         VALUES (?, ?, ?, ?, ?)`,
        [item.product_id, -item.quantity, `Order Placement #${order_number}`, item.stock_quantity, newStock]
      );
    }

    // Clear Cart if order was placed from cart
    if (!direct_item) {
      await db.run('DELETE FROM cart_items WHERE user_id = ?', [userId]);
    }

    res.status(201).json({
      success: true,
      message: 'Order placed successfully!',
      order: {
        id: orderId,
        order_number,
        total_amount,
        status: 'Pending'
      }
    });
  } catch (err) {
    next(err);
  }
}

async function getUserOrders(req, res, next) {
  try {
    const userId = req.user.id;
    const orders = await db.all(
      'SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC',
      [userId]
    );

    for (const order of orders) {
      order.items = await db.all('SELECT * FROM order_items WHERE order_id = ?', [order.id]);
    }

    res.json({ success: true, data: orders });
  } catch (err) {
    next(err);
  }
}

async function getOrderDetails(req, res, next) {
  try {
    const userId = req.user.id;
    const { orderNumber } = req.params;

    const order = await db.get(
      'SELECT * FROM orders WHERE order_number = ? AND (user_id = ? OR ? = "admin")',
      [orderNumber, userId, req.user.role]
    );

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found.' });
    }

    order.items = await db.all('SELECT * FROM order_items WHERE order_id = ?', [order.id]);

    res.json({ success: true, order });
  } catch (err) {
    next(err);
  }
}

module.exports = { validateCoupon, placeOrder, getUserOrders, getOrderDetails };
