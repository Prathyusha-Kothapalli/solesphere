const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const { requireAdmin } = require('../middleware/admin');
const {
  getAllCoupons,
  createCoupon,
  validateCouponCode,
  deleteCoupon
} = require('../controllers/couponController');

router.post('/validate', validateCouponCode);

// Admin-only coupon management
router.use(authenticateToken);
router.use(requireAdmin);

router.get('/', getAllCoupons);
router.post('/', createCoupon);
router.delete('/:id', deleteCoupon);

module.exports = router;
