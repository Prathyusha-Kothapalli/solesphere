const db = require('../config/database');

async function getDashboardStats(req, res, next) {
  try {
    const revenueRow = await db.get(`SELECT SUM(total_amount) as total_revenue FROM orders WHERE status != 'Cancelled'`);
    const totalOrdersRow = await db.get(`SELECT COUNT(*) as total_orders FROM orders`);
    const totalProductsRow = await db.get(`SELECT COUNT(*) as total_products FROM products`);
    const totalCustomersRow = await db.get(`SELECT COUNT(*) as total_customers FROM users WHERE role = 'customer'`);
    const lowStockRow = await db.get(`SELECT COUNT(*) as low_stock_count FROM products WHERE stock_quantity <= 15`);

    // Top Selling Products
    const topProducts = await db.all(`
      SELECT p.id, p.name, p.price, p.images, SUM(oi.quantity) as total_sold, SUM(oi.price * oi.quantity) as revenue
      FROM order_items oi
      JOIN products p ON oi.product_id = p.id
      JOIN orders o ON oi.order_id = o.id
      WHERE o.status != 'Cancelled'
      GROUP BY p.id
      ORDER BY total_sold DESC
      LIMIT 5
    `);

    const formattedTopProducts = topProducts.map(p => ({
      ...p,
      images: JSON.parse(p.images || '[]')
    }));

    // Brand Revenue Distribution
    const brandSales = await db.all(`
      SELECT b.name as brand_name, COUNT(DISTINCT o.id) as order_count, SUM(oi.price * oi.quantity) as revenue
      FROM order_items oi
      JOIN products p ON oi.product_id = p.id
      JOIN brands b ON p.brand_id = b.id
      JOIN orders o ON oi.order_id = o.id
      WHERE o.status != 'Cancelled'
      GROUP BY b.id
      ORDER BY revenue DESC
    `);

    // Status breakdown
    const statusBreakdown = await db.all(`
      SELECT status, COUNT(*) as count FROM orders GROUP BY status
    `);

    res.json({
      success: true,
      stats: {
        totalRevenue: revenueRow.total_revenue || 0,
        totalOrders: totalOrdersRow.total_orders || 0,
        totalProducts: totalProductsRow.total_products || 0,
        totalCustomers: totalCustomersRow.total_customers || 0,
        lowStockCount: lowStockRow.low_stock_count || 0
      },
      topProducts: formattedTopProducts,
      brandSales,
      statusBreakdown
    });
  } catch (err) {
    next(err);
  }
}

// PRODUCT CRUD
async function createProduct(req, res, next) {
  try {
    const {
      name,
      brand_id,
      category_id,
      price,
      original_price,
      description,
      sizes_available,
      colors,
      images,
      is_featured,
      is_new_release,
      stock_quantity
    } = req.body;

    if (!name || !brand_id || !category_id || !price || !description) {
      return res.status(400).json({ success: false, message: 'Name, brand, category, price, and description are required.' });
    }

    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now().toString().slice(-4);
    const sizesJson = typeof sizes_available === 'string' ? sizes_available : JSON.stringify(sizes_available || ["7","8","9","10","11"]);
    const colorsJson = typeof colors === 'string' ? colors : JSON.stringify(colors || ["Standard"]);
    const imagesJson = typeof images === 'string' ? images : JSON.stringify(images || []);

    const result = await db.run(
      `INSERT INTO products 
       (name, slug, brand_id, category_id, price, original_price, description, sizes_available, colors, images, is_featured, is_new_release, stock_quantity)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        slug,
        brand_id,
        category_id,
        parseFloat(price),
        original_price ? parseFloat(original_price) : null,
        description,
        sizesJson,
        colorsJson,
        imagesJson,
        is_featured ? 1 : 0,
        is_new_release ? 1 : 0,
        parseInt(stock_quantity) || 50
      ]
    );

    // Initial Inventory Log
    await db.run(
      `INSERT INTO inventory_logs (product_id, change_amount, reason, previous_stock, new_stock)
       VALUES (?, ?, 'Initial Admin Creation', 0, ?)`,
      [result.id, parseInt(stock_quantity) || 50, parseInt(stock_quantity) || 50]
    );

    res.status(201).json({ success: true, message: 'Product created successfully!', id: result.id });
  } catch (err) {
    next(err);
  }
}

async function updateProduct(req, res, next) {
  try {
    const { id } = req.params;
    const {
      name,
      brand_id,
      category_id,
      price,
      original_price,
      description,
      sizes_available,
      colors,
      images,
      is_featured,
      is_new_release,
      stock_quantity
    } = req.body;

    const existing = await db.get('SELECT * FROM products WHERE id = ?', [id]);
    if (!existing) {
      return res.status(404).json({ success: false, message: 'Product not found.' });
    }

    const sizesJson = sizes_available ? (typeof sizes_available === 'string' ? sizes_available : JSON.stringify(sizes_available)) : existing.sizes_available;
    const colorsJson = colors ? (typeof colors === 'string' ? colors : JSON.stringify(colors)) : existing.colors;
    const imagesJson = images ? (typeof images === 'string' ? images : JSON.stringify(images)) : existing.images;

    await db.run(
      `UPDATE products SET 
         name = COALESCE(?, name),
         brand_id = COALESCE(?, brand_id),
         category_id = COALESCE(?, category_id),
         price = COALESCE(?, price),
         original_price = COALESCE(?, original_price),
         description = COALESCE(?, description),
         sizes_available = ?,
         colors = ?,
         images = ?,
         is_featured = COALESCE(?, is_featured),
         is_new_release = COALESCE(?, is_new_release),
         stock_quantity = COALESCE(?, stock_quantity)
       WHERE id = ?`,
      [
        name,
        brand_id,
        category_id,
        price ? parseFloat(price) : null,
        original_price ? parseFloat(original_price) : null,
        description,
        sizesJson,
        colorsJson,
        imagesJson,
        is_featured !== undefined ? (is_featured ? 1 : 0) : null,
        is_new_release !== undefined ? (is_new_release ? 1 : 0) : null,
        stock_quantity !== undefined ? parseInt(stock_quantity) : null,
        id
      ]
    );

    if (stock_quantity !== undefined && parseInt(stock_quantity) !== existing.stock_quantity) {
      const diff = parseInt(stock_quantity) - existing.stock_quantity;
      await db.run(
        `INSERT INTO inventory_logs (product_id, change_amount, reason, previous_stock, new_stock)
         VALUES (?, ?, 'Admin Manual Stock Adjustment', ?, ?)`,
        [id, diff, existing.stock_quantity, parseInt(stock_quantity)]
      );
    }

    res.json({ success: true, message: 'Product updated successfully.' });
  } catch (err) {
    next(err);
  }
}

async function deleteProduct(req, res, next) {
  try {
    const { id } = req.params;
    const result = await db.run('DELETE FROM products WHERE id = ?', [id]);
    if (result.changes === 0) {
      return res.status(404).json({ success: false, message: 'Product not found.' });
    }
    res.json({ success: true, message: 'Product deleted successfully.' });
  } catch (err) {
    next(err);
  }
}

// INVENTORY MANAGEMENT
async function getInventory(req, res, next) {
  try {
    const products = await db.all(`
      SELECT p.id, p.name, p.stock_quantity, p.price, b.name as brand_name, c.name as category_name
      FROM products p
      JOIN brands b ON p.brand_id = b.id
      JOIN categories c ON p.category_id = c.id
      ORDER BY p.stock_quantity ASC
    `);

    const logs = await db.all(`
      SELECT il.*, p.name as product_name
      FROM inventory_logs il
      JOIN products p ON il.product_id = p.id
      ORDER BY il.created_at DESC
      LIMIT 30
    `);

    res.json({ success: true, products, logs });
  } catch (err) {
    next(err);
  }
}

// ORDER MANAGEMENT
async function getAllOrders(req, res, next) {
  try {
    const { status, search } = req.query;
    let whereClause = 'WHERE 1=1';
    const params = [];

    if (status) {
      whereClause += ' AND o.status = ?';
      params.push(status);
    }

    if (search) {
      whereClause += ' AND (o.order_number LIKE ? OR o.shipping_name LIKE ? OR u.email LIKE ?)';
      params.push(`%${search}%`, `%${search}%`, `%${search}%`);
    }

    const sql = `
      SELECT o.*, u.email as customer_email, u.name as customer_name
      FROM orders o
      JOIN users u ON o.user_id = u.id
      ${whereClause}
      ORDER BY o.created_at DESC
    `;

    const orders = await db.all(sql, params);
    res.json({ success: true, data: orders });
  } catch (err) {
    next(err);
  }
}

async function updateOrderStatus(req, res, next) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: `Invalid status. Must be one of: ${validStatuses.join(', ')}` });
    }

    const result = await db.run('UPDATE orders SET status = ? WHERE id = ?', [status, id]);
    if (result.changes === 0) {
      return res.status(404).json({ success: false, message: 'Order not found.' });
    }

    res.json({ success: true, message: `Order status updated to ${status}.` });
  } catch (err) {
    next(err);
  }
}

// CUSTOMER MANAGEMENT
async function getCustomers(req, res, next) {
  try {
    const customers = await db.all(`
      SELECT 
        u.id, u.name, u.email, u.phone, u.city, u.created_at,
        COUNT(o.id) as order_count,
        COALESCE(SUM(o.total_amount), 0) as total_spent
      FROM users u
      LEFT JOIN orders o ON u.id = o.user_id AND o.status != 'Cancelled'
      WHERE u.role = 'customer'
      GROUP BY u.id
      ORDER BY total_spent DESC
    `);

    res.json({ success: true, data: customers });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getDashboardStats,
  createProduct,
  updateProduct,
  deleteProduct,
  getInventory,
  getAllOrders,
  updateOrderStatus,
  getCustomers
};
