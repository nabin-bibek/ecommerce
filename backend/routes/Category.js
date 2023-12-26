const express = require('express');
const { fetchCategories } = require('../controller/Category');
const { createCategory } = require('../controller/Category');

const router = express.Router();

router.get('/', fetchCategories).post('/', createCategory);

module.exports = router;