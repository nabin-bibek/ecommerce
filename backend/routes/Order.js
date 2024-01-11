const express= require('express');
const { fetchOrderByUser, createOrder, updateOrder, deleteOrder, fetchOrders } = require('../controller/Order');
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");


router.get('/user/:userId',protect, fetchOrderByUser)
        .post('/',protect, createOrder)
        .patch('/:id',protect, updateOrder)
        .delete('/:id',protect, deleteOrder)
        .get('/',protect, fetchOrders)

module.exports = router;