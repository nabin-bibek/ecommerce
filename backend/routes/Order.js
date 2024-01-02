const express= require('express');
const { fetchOrderByUser, createOrder, updateOrder, deleteOrder, fetchOrders } = require('../controller/Order');
const router = express.Router();

router.get('/user/:userId', fetchOrderByUser)
        .post('/', createOrder)
        .patch('/:id', updateOrder)
        .delete('/:id', deleteOrder)
        .get('/', fetchOrders)

module.exports = router;