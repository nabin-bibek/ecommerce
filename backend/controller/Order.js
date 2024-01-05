const { Order } = require("../model/Order");

const fetchOrderByUser = async(req, res)=> {
    const {userId} = req.params;
    try {
        const orders = await Order.find({user:userId});
        res.status(200).json(orders)
    } catch (error) {
        res.status(400).json(error);
        
    }
}

const createOrder = async (req,res)=> {
    const order = new Order(req.body);
    try {
        const data= await order.save();
    res.status(201).json(data);        
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteOrder = async (req, res)=> {
    const {id} = req.params;
    try {
        const order = await Order.findByIdAndDelete(id);
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json(error);
    }
}

const updateOrder = async (req,res) => {
    const {id} = req.params;
    try {
        const order= await Order.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(order);
    } catch (error) {
        
    }
}

const fetchOrders = async(req, res) => {
        let order = Order.find({deleted:{$ne:true}});
        let totalOrders = Order.find({deleted:{$ne:true}});
    
        if (req.query._sort && req.query._order)
        {
            order = order.sort({ [req.query._sort]: req.query._order });
        }
    
        const totalNoOrders= await totalOrders.count().exec();
    
        if (req.query._page && req.query._limit) {
            const pageSize = req.query._limit;
            const page = req.query._page
            order = order.skip(pageSize * (page - 1)).limit(pageSize);
        }
    
    
        try {
            const data = await order.exec();
            res.set('X-Total-Count', totalNoOrders);
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json(error);
        }
}

module.exports ={ fetchOrderByUser, createOrder, deleteOrder, updateOrder, fetchOrders}