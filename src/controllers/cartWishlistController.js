const db = require('../config/database');

// CART CONTROLLER LOGIC
async function getCart(req, res, next) {
  try {
    const userId = req.user.id;
    const sql = `
      SELECT 
        ci.id as cart_item_id,
        ci.size,
        ci.color,
        ci.quantity,
        p.id as product_id,
        p.name as product_name,
        p.slug,
        p.price,
        p.original_price,
        p.images,
        p.stock_quantity,
        b.name as brand_name
      FROM cart_items ci
      JOIN products p ON ci.product_id = p.id
      JOIN brands b ON p.brand_id = b.id
      WHERE ci.user_id = ?
      ORDER BY ci.created_at DESC
    `;
    const items = await db.all(sql, [userId]);

    const formattedItems = items.map(item => ({
      ...item,
      images: JSON.parse(item.images || '[]')
    }));

    const subtotal = formattedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    res.json({
      success: true,
      data: formattedItems,
      summary: {
        itemCount: formattedItems.reduce((acc, item) => acc + item.quantity, 0),
        subtotal
      }
    });
  } catch (err) {
    next(err);
  }
}

async function addToCart(req, res, next) {
  try {
    const userId = req.user.id;
    const { product_id, size, color, quantity } = req.body;

    if (!product_id || !size || !color) {
      return res.status(400).json({ success: false, message: 'Product ID, size, and color are required.' });
    }

    const qty = parseInt(quantity) || 1;

    const product = await db.get('SELECT id, name, stock_quantity FROM products WHERE id = ?', [product_id]);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found.' });
    }

    if (product.stock_quantity < qty) {
      return res.status(400).json({ success: false, message: `Only ${product.stock_quantity} pairs in stock.` });
    }

    // Check if item already exists in cart with same size & color
    const existing = await db.get(
      'SELECT id, quantity FROM cart_items WHERE user_id = ? AND product_id = ? AND size = ? AND color = ?',
      [userId, product_id, size, color]
    );

    if (existing) {
      const newQty = existing.quantity + qty;
      await db.run('UPDATE cart_items SET quantity = ? WHERE id = ?', [newQty, existing.id]);
    } else {
      await db.run(
        'INSERT INTO cart_items (user_id, product_id, size, color, quantity) VALUES (?, ?, ?, ?, ?)',
        [userId, product_id, size, color, qty]
      );
    }

    res.json({ success: true, message: `Added ${product.name} to cart!` });
  } catch (err) {
    next(err);
  }
}

async function updateCartQuantity(req, res, next) {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const { quantity } = req.body;

    const qty = parseInt(quantity);
    if (isNaN(qty) || qty < 1) {
      return res.status(400).json({ success: false, message: 'Quantity must be at least 1.' });
    }

    const result = await db.run(
      'UPDATE cart_items SET quantity = ? WHERE id = ? AND user_id = ?',
      [qty, id, userId]
    );

    if (result.changes === 0) {
      return res.status(404).json({ success: false, message: 'Cart item not found.' });
    }

    res.json({ success: true, message: 'Cart item updated.' });
  } catch (err) {
    next(err);
  }
}

async function removeFromCart(req, res, next) {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const result = await db.run('DELETE FROM cart_items WHERE id = ? AND user_id = ?', [id, userId]);
    if (result.changes === 0) {
      return res.status(404).json({ success: false, message: 'Cart item not found.' });
    }

    res.json({ success: true, message: 'Item removed from cart.' });
  } catch (err) {
    next(err);
  }
}

async function clearCart(req, res, next) {
  try {
    const userId = req.user.id;
    await db.run('DELETE FROM cart_items WHERE user_id = ?', [userId]);
    res.json({ success: true, message: 'Cart cleared.' });
  } catch (err) {
    next(err);
  }
}

// WISHLIST CONTROLLER LOGIC
async function getWishlist(req, res, next) {
  try {
    const userId = req.user.id;
    const sql = `
      SELECT 
        wi.id as wishlist_id,
        wi.created_at,
        p.id as product_id,
        p.name as product_name,
        p.slug,
        p.price,
        p.original_price,
        p.images,
        p.rating_avg,
        p.stock_quantity,
        b.name as brand_name
      FROM wishlist_items wi
      JOIN products p ON wi.product_id = p.id
      JOIN brands b ON p.brand_id = b.id
      WHERE wi.user_id = ?
      ORDER BY wi.created_at DESC
    `;
    const items = await db.all(sql, [userId]);
    const formatted = items.map(item => ({
      ...item,
      images: JSON.parse(item.images || '[]')
    }));

    res.json({ success: true, data: formatted });
  } catch (err) {
    next(err);
  }
}

async function toggleWishlist(req, res, next) {
  try {
    const userId = req.user.id;
    const { product_id } = req.body;

    if (!product_id) {
      return res.status(400).json({ success: false, message: 'Product ID is required.' });
    }

    const existing = await db.get(
      'SELECT id FROM wishlist_items WHERE user_id = ? AND product_id = ?',
      [userId, product_id]
    );

    if (existing) {
      await db.run('DELETE FROM wishlist_items WHERE id = ?', [existing.id]);
      res.json({ success: true, inWishlist: false, message: 'Removed from wishlist.' });
    } else {
      await db.run('INSERT INTO wishlist_items (user_id, product_id) VALUES (?, ?)', [userId, product_id]);
      res.json({ success: true, inWishlist: true, message: 'Added to wishlist!' });
    }
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getCart,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
  getWishlist,
  toggleWishlist
};
