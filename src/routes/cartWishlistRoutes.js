const express = require('express');
const router = express.Router();
const {
  getCart,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
  getWishlist,
  toggleWishlist
} = require('../controllers/cartWishlistController');
const { authenticateToken } = require('../middleware/auth');

router.use(authenticateToken);

// Cart
router.get('/cart', getCart);
router.post('/cart', addToCart);
router.put('/cart/:id', updateCartQuantity);
router.delete('/cart/:id', removeFromCart);
router.delete('/cart', clearCart);

// Wishlist
router.get('/wishlist', getWishlist);
router.post('/wishlist/toggle', toggleWishlist);

module.exports = router;
