const express = require('express');
const { createProduct, fetchProducts, fetchProductById, updateProduct } = require('../controller/Product');
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post('/',protect, createProduct)
    .get('/',protect, fetchProducts)
    .get('/:id',protect, fetchProductById)
    .patch('/:id',protect, updateProduct);

module.exports = router;