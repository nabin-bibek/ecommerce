const express = require('express');
const { fetchBrands } = require('../controller/Brand');
const { createBrand } = require('../controller/Brand');

const router = express.Router();

router.get('/', fetchBrands).post('/', createBrand);

module.exports = router