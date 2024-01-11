const express = require('express');
const { fetchBrands } = require('../controller/Brand');
const { createBrand } = require('../controller/Brand');
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get('/',protect, fetchBrands).post('/',protect, createBrand);

module.exports = router