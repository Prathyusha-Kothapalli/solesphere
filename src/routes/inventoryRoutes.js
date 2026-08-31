const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const { requireAdmin } = require('../middleware/admin');
const {
  getLowStockProducts,
  updateStock,
  getInventoryLogs,
  triggerReplenishment
} = require('../controllers/inventoryController');

router.use(authenticateToken);
router.use(requireAdmin);

router.get('/low-stock', getLowStockProducts);
router.put('/update-stock', updateStock);
router.get('/logs', getInventoryLogs);
router.post('/replenish', triggerReplenishment);

module.exports = router;
