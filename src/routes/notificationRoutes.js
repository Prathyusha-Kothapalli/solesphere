const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const {
  getNotifications,
  markAsRead,
  markAllAsRead,
  getPreferences,
  updatePreferences
} = require('../controllers/notificationController');

router.use(authenticateToken);

router.get('/', getNotifications);
router.put('/read-all', markAllAsRead);
router.put('/:id/read', markAsRead);
router.get('/preferences', getPreferences);
router.put('/preferences', updatePreferences);

module.exports = router;
