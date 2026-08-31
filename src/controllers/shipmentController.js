const db = require('../config/database');

async function ensureShipmentsTable() {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS shipments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL,
      courier TEXT NOT NULL,
      tracking_number TEXT UNIQUE NOT NULL,
      status TEXT NOT NULL DEFAULT 'Dispatched',
      origin TEXT DEFAULT 'SoleSphere Central Warehouse, Portland, OR',
      destination TEXT NOT NULL,
      estimated_delivery DATETIME,
      shipped_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
    );
  `);
}

// POST /api/shipments/create (Admin)
async function createShipment(req, res, next) {
  try {
    await ensureShipmentsTable();
    const { order_id, courier, tracking_number, destination, days_to_deliver } = req.body;

    if (!order_id || !courier || !tracking_number || !destination) {
      return res.status(400).json({
        success: false,
        message: 'order_id, courier, tracking_number, and destination are required.'
      });
    }

    const order = await db.get('SELECT * FROM orders WHERE id = ?', [order_id]);
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found.' });
    }

    const estDays = parseInt(days_to_deliver, 10) || 4;
    const estimatedDate = new Date(Date.now() + estDays * 24 * 60 * 60 * 1000).toISOString();

    const result = await db.run(
      `INSERT INTO shipments (order_id, courier, tracking_number, destination, estimated_delivery)
       VALUES (?, ?, ?, ?, ?)`,
      [order_id, courier, tracking_number, destination, estimatedDate]
    );

    // Sync order status to Shipped
    await db.run("UPDATE orders SET status = 'Shipped' WHERE id = ?", [order_id]);

    const shipment = await db.get('SELECT * FROM shipments WHERE id = ?', [result.id]);

    res.status(201).json({
      success: true,
      message: 'Shipment created successfully.',
      data: shipment
    });
  } catch (error) {
    next(error);
  }
}

// GET /api/shipments/track/:trackingNumber
async function getShipmentTracking(req, res, next) {
  try {
    await ensureShipmentsTable();
    const { trackingNumber } = req.params;

    const shipment = await db.get(`
      SELECT s.*, o.order_number, o.user_id
      FROM shipments s
      JOIN orders o ON s.order_id = o.id
      WHERE s.tracking_number = ?
    `, [trackingNumber]);

    if (!shipment) {
      return res.status(404).json({ success: false, message: 'Shipment tracking number not found.' });
    }

    // Build timeline events
    const timeline = [
      { status: 'Order Processed', location: 'Warehouse', timestamp: shipment.shipped_at },
      { status: 'Dispatched', location: 'Portland Logistics Hub', timestamp: shipment.shipped_at }
    ];

    if (['In Transit', 'Out for Delivery', 'Delivered'].includes(shipment.status)) {
      timeline.push({ status: 'In Transit', location: 'Regional Sorting Facility', timestamp: shipment.updated_at });
    }
    if (['Out for Delivery', 'Delivered'].includes(shipment.status)) {
      timeline.push({ status: 'Out for Delivery', location: shipment.destination, timestamp: shipment.updated_at });
    }
    if (shipment.status === 'Delivered') {
      timeline.push({ status: 'Delivered', location: shipment.destination, timestamp: shipment.updated_at });
    }

    res.json({
      success: true,
      data: {
        ...shipment,
        timeline
      }
    });
  } catch (error) {
    next(error);
  }
}

// GET /api/shipments/order/:orderId
async function getShipmentByOrder(req, res, next) {
  try {
    await ensureShipmentsTable();
    const { orderId } = req.params;

    const shipment = await db.get('SELECT * FROM shipments WHERE order_id = ?', [orderId]);
    if (!shipment) {
      return res.status(404).json({ success: false, message: 'No active shipment found for this order.' });
    }

    res.json({ success: true, data: shipment });
  } catch (error) {
    next(error);
  }
}

// PUT /api/shipments/update-status (Admin)
async function updateShipmentStatus(req, res, next) {
  try {
    await ensureShipmentsTable();
    const { tracking_number, status } = req.body;

    const validStatuses = ['Dispatched', 'In Transit', 'Out for Delivery', 'Delivered'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Allowed values: ${validStatuses.join(', ')}`
      });
    }

    const shipment = await db.get('SELECT * FROM shipments WHERE tracking_number = ?', [tracking_number]);
    if (!shipment) {
      return res.status(404).json({ success: false, message: 'Shipment not found.' });
    }

    await db.run(
      'UPDATE shipments SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE tracking_number = ?',
      [status, tracking_number]
    );

    if (status === 'Delivered') {
      await db.run("UPDATE orders SET status = 'Delivered' WHERE id = ?", [shipment.order_id]);
    }

    const updated = await db.get('SELECT * FROM shipments WHERE tracking_number = ?', [tracking_number]);
    res.json({
      success: true,
      message: `Shipment status updated to '${status}'.`,
      data: updated
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createShipment,
  getShipmentTracking,
  getShipmentByOrder,
  updateShipmentStatus
};
