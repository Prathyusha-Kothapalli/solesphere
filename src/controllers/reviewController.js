const db = require('../config/database');

async function getProductReviews(req, res, next) {
  try {
    const { productId } = req.params;

    const reviews = await db.all(
      'SELECT * FROM reviews WHERE product_id = ? ORDER BY created_at DESC',
      [productId]
    );

    const ratingSummary = {
      1: 0, 2: 0, 3: 0, 4: 0, 5: 0
    };

    reviews.forEach(r => {
      if (ratingSummary[r.rating] !== undefined) ratingSummary[r.rating]++;
    });

    res.json({
      success: true,
      data: reviews,
      total: reviews.length,
      ratingSummary
    });
  } catch (err) {
    next(err);
  }
}

async function addReview(req, res, next) {
  try {
    const userId = req.user.id;
    const userName = req.user.name;
    const { product_id, rating, title, comment } = req.body;

    if (!product_id || !rating || !title || !comment) {
      return res.status(400).json({ success: false, message: 'Product ID, rating, title, and comment are required.' });
    }

    const numRating = parseInt(rating);
    if (numRating < 1 || numRating > 5) {
      return res.status(400).json({ success: false, message: 'Rating must be between 1 and 5.' });
    }

    // Check if user has purchased this product
    const purchase = await db.get(
      `SELECT oi.id FROM order_items oi
       JOIN orders o ON oi.order_id = o.id
       WHERE o.user_id = ? AND oi.product_id = ? AND o.status != 'Cancelled'`,
      [userId, product_id]
    );

    const verified = purchase ? 1 : 0;

    await db.run(
      `INSERT INTO reviews (product_id, user_id, user_name, rating, title, comment, verified_purchase)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [product_id, userId, userName, numRating, title, comment, verified]
    );

    // Recalculate average rating and review_count for product
    const stats = await db.get(
      'SELECT AVG(rating) as avg_rating, COUNT(*) as count FROM reviews WHERE product_id = ?',
      [product_id]
    );

    const newAvg = Number((stats.avg_rating || 5.0).toFixed(1));
    await db.run(
      'UPDATE products SET rating_avg = ?, review_count = ? WHERE id = ?',
      [newAvg, stats.count, product_id]
    );

    res.status(201).json({
      success: true,
      message: 'Review submitted successfully!',
      rating_avg: newAvg,
      review_count: stats.count
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { getProductReviews, addReview };
