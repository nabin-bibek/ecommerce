const express = require('express');
const { createProduct, fetchProducts } = require('../controller/Product');

const router = express.Router();

router.post('/', createProduct).get('/', fetchProducts);

module.exports = router