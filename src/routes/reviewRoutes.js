const express = require('express');
const router = express.Router();
const { getProductReviews, addReview } = require('../controllers/reviewController');
const { authenticateToken } = require('../middleware/auth');

router.get('/product/:productId', getProductReviews);
router.post('/', authenticateToken, addReview);

module.exports = router;
