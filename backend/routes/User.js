const express = require('express');
const { fetchUserById, updateUser } = require('../controller/User');
const { protect } = require("../middleware/authMiddleware");


const router = express.Router();

router.get("/", protect, fetchUserById).patch("/:id",protect, updateUser);

module.exports =  router;