const express = require('express');
const { addToCart, fetchCartByUser, deleteFromCart, updateCart } = require('../controller/Cart');
const {protect} = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, addToCart)
    .get('/' ,protect, fetchCartByUser)
    .delete('/:id', protect, deleteFromCart)
    .patch('/:id', protect, updateCart);

module.exports = router;