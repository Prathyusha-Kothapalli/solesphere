const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const { requireAdmin } = require('../middleware/admin');
const {
  createShipment,
  getShipmentTracking,
  getShipmentByOrder,
  updateShipmentStatus
} = require('../controllers/shipmentController');

router.get('/track/:trackingNumber', getShipmentTracking);

router.use(authenticateToken);
router.get('/order/:orderId', getShipmentByOrder);

// Admin-only routes
router.post('/create', requireAdmin, createShipment);
router.put('/update-status', requireAdmin, updateShipmentStatus);

module.exports = router;
