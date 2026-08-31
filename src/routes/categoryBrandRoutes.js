const express = require('express');
const router = express.Router();
const { getBrands, getCategories } = require('../controllers/categoryBrandController');

router.get('/brands', getBrands);
router.get('/categories', getCategories);

module.exports = router;
