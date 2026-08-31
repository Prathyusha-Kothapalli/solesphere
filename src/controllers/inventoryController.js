const db = require('../config/database');

// GET /api/inventory/low-stock
async function getLowStockProducts(req, res, next) {
  try {
    const threshold = parseInt(req.query.threshold, 10) || 15;
    const products = await db.all(
      'SELECT id, name, price, stock_quantity FROM products WHERE stock_quantity <= ? ORDER BY stock_quantity ASC',
      [threshold]
    );

    res.json({
      success: true,
      threshold,
      count: products.length,
      data: products
    });
  } catch (error) {
    next(error);
  }
}

// PUT /api/inventory/update-stock
async function updateStock(req, res, next) {
  try {
    const { product_id, change_amount, reason } = req.body;

    if (!product_id || change_amount === undefined) {
      return res.status(400).json({ success: false, message: 'product_id and change_amount are required.' });
    }

    const product = await db.get('SELECT * FROM products WHERE id = ?', [product_id]);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found.' });
    }

    const previous_stock = product.stock_quantity;
    const new_stock = Math.max(0, previous_stock + parseInt(change_amount, 10));

    await db.run('UPDATE products SET stock_quantity = ? WHERE id = ?', [new_stock, product_id]);

    await db.run(
      `INSERT INTO inventory_logs (product_id, change_amount, reason, previous_stock, new_stock)
       VALUES (?, ?, ?, ?, ?)`,
      [product_id, change_amount, reason || 'Manual Admin Adjustment', previous_stock, new_stock]
    );

    res.json({
      success: true,
      message: 'Product stock updated successfully.',
      data: {
        product_id,
        previous_stock,
        new_stock,
        change_amount
      }
    });
  } catch (error) {
    next(error);
  }
}

// GET /api/inventory/logs
async function getInventoryLogs(req, res, next) {
  try {
    const logs = await db.all(`
      SELECT il.*, p.name as product_name
      FROM inventory_logs il
      JOIN products p ON il.product_id = p.id
      ORDER BY il.created_at DESC
      LIMIT 100
    `);

    res.json({
      success: true,
      count: logs.length,
      data: logs
    });
  } catch (error) {
    next(error);
  }
}

// POST /api/inventory/replenish
async function triggerReplenishment(req, res, next) {
  try {
    const threshold = parseInt(req.body.threshold, 10) || 10;
    const addQuantity = parseInt(req.body.add_quantity, 10) || 50;

    const lowStockItems = await db.all('SELECT id, stock_quantity FROM products WHERE stock_quantity <= ?', [threshold]);

    for (const item of lowStockItems) {
      const newStock = item.stock_quantity + addQuantity;
      await db.run('UPDATE products SET stock_quantity = ? WHERE id = ?', [newStock, item.id]);
      await db.run(
        `INSERT INTO inventory_logs (product_id, change_amount, reason, previous_stock, new_stock)
         VALUES (?, ?, ?, ?, ?)`,
        [item.id, addQuantity, 'Automated Stock Replenishment', item.stock_quantity, newStock]
      );
    }

    res.json({
      success: true,
      message: `Replenished ${lowStockItems.length} low-stock items by +${addQuantity} units.`,
      itemsReplenished: lowStockItems.length
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getLowStockProducts,
  updateStock,
  getInventoryLogs,
  triggerReplenishment
};
