const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//Product List API
router.get('/list', productController.getProductList);

//Product Detail API
router.get('/:id', productController.getProductDetail);

module.exports = router;