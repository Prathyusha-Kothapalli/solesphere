const db = require('../config/database');

// GET /api/coupons (Admin)
async function getAllCoupons(req, res, next) {
  try {
    const coupons = await db.all('SELECT * FROM coupons ORDER BY created_at DESC');
    res.json({ success: true, count: coupons.length, data: coupons });
  } catch (error) {
    next(error);
  }
}

// POST /api/coupons (Admin)
async function createCoupon(req, res, next) {
  try {
    const { code, discount_percent, discount_amount, min_purchase } = req.body;

    if (!code) {
      return res.status(400).json({ success: false, message: 'Coupon code is required.' });
    }

    const uppercaseCode = code.trim().toUpperCase();

    const existing = await db.get('SELECT id FROM coupons WHERE code = ?', [uppercaseCode]);
    if (existing) {
      return res.status(400).json({ success: false, message: 'Coupon code already exists.' });
    }

    const percent = parseFloat(discount_percent) || 0;
    const amount = parseFloat(discount_amount) || 0;
    const minSpend = parseFloat(min_purchase) || 0;

    const result = await db.run(
      `INSERT INTO coupons (code, discount_percent, discount_amount, min_purchase, is_active)
       VALUES (?, ?, ?, ?, 1)`,
      [uppercaseCode, percent, amount, minSpend]
    );

    const coupon = await db.get('SELECT * FROM coupons WHERE id = ?', [result.id]);

    res.status(201).json({
      success: true,
      message: 'Coupon created successfully.',
      data: coupon
    });
  } catch (error) {
    next(error);
  }
}

// POST /api/coupons/validate
async function validateCouponCode(req, res, next) {
  try {
    const { code, cart_subtotal } = req.body;

    if (!code) {
      return res.status(400).json({ success: false, message: 'Coupon code is required.' });
    }

    const uppercaseCode = code.trim().toUpperCase();
    const subtotal = parseFloat(cart_subtotal) || 0;

    const coupon = await db.get('SELECT * FROM coupons WHERE code = ? AND is_active = 1', [uppercaseCode]);

    if (!coupon) {
      return res.status(404).json({ success: false, message: 'Invalid or expired coupon code.' });
    }

    if (subtotal < coupon.min_purchase) {
      return res.status(400).json({
        success: false,
        message: `Minimum purchase amount of $${coupon.min_purchase.toFixed(2)} required for this coupon.`
      });
    }

    let discount = 0;
    if (coupon.discount_percent > 0) {
      discount = (subtotal * coupon.discount_percent) / 100;
    } else if (coupon.discount_amount > 0) {
      discount = Math.min(subtotal, coupon.discount_amount);
    }

    res.json({
      success: true,
      message: 'Coupon code applied successfully.',
      data: {
        code: coupon.code,
        discount_amount: parseFloat(discount.toFixed(2)),
        final_subtotal: parseFloat(Math.max(0, subtotal - discount).toFixed(2))
      }
    });
  } catch (error) {
    next(error);
  }
}

// DELETE /api/coupons/:id (Admin)
async function deleteCoupon(req, res, next) {
  try {
    const couponId = req.params.id;

    const result = await db.run('DELETE FROM coupons WHERE id = ?', [couponId]);
    if (result.changes === 0) {
      return res.status(404).json({ success: false, message: 'Coupon not found.' });
    }

    res.json({ success: true, message: 'Coupon deleted successfully.' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllCoupons,
  createCoupon,
  validateCouponCode,
  deleteCoupon
};
