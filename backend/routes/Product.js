const express = require('express');
const { createProduct, fetchProducts, fetchProductById, updateProduct } = require('../controller/Product');

const router = express.Router();

router.post('/', createProduct)
    .get('/', fetchProducts)
    .get('/:id', fetchProductById)
    .patch('/:id', updateProduct);

module.exports = router;