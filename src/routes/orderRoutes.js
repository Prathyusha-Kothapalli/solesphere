const express = require('express');
const router = express.Router();
const { validateCoupon, placeOrder, getUserOrders, getOrderDetails } = require('../controllers/orderController');
const { authenticateToken } = require('../middleware/auth');
const { checkoutRateLimiter } = require('../middleware/rateLimiter');

router.post('/coupon/validate', validateCoupon);

router.use(authenticateToken);
router.post('/', checkoutRateLimiter, placeOrder);
router.get('/', getUserOrders);
router.get('/:orderNumber', getOrderDetails);

module.exports = router;
