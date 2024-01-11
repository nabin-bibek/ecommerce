const express = require('express');
const { fetchCategories } = require('../controller/Category');
const { createCategory } = require('../controller/Category');
const { protect } = require("../middleware/authMiddleware");


const router = express.Router();

router.get("/", protect, fetchCategories).post("/", protect, createCategory);

module.exports = router;