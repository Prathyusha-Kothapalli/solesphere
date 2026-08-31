const express = require('express');
const router = express.Router();
const { getProducts, getProductByIdOrSlug } = require('../controllers/productController');

router.get('/', getProducts);
router.get('/:identifier', getProductByIdOrSlug);

module.exports = router;
