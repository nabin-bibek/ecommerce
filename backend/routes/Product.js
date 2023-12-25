const express = require('express');
const { createProduct, fetchAllProducts } = require('../controller/Product');

const router = express.Router();

router.post('/', createProduct).get('/', fetchAllProducts);

module.exports = router