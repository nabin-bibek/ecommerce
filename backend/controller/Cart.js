const { Cart } = require('../model/Cart');

const addToCart = async (req, res) => {
    if (req.body.user != req.user._id) {
        res.status(401).json({ status: 'error', msg: 'User Not authorized' })
        return;
    }
    const cart = new Cart(req.body);
    try {
        const data = await cart.save();
        const result = await data.populate('product');
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error);
    }
}

const fetchCartByUser = async (req, res) => {
    

    try {
        const cartItems = await Cart.find({ user: req.user.id })
            .populate('product');
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(400).json(error);
    }

}

const updateCart = async (req, res) => {
    const { id } = req.params;
    const user = req.user._id;
    const isFound = await Cart.findOne({ _id: id, user });
    if (!isFound) {
        res.status(401).json({ status: 'error', msg: 'Product not available' });
        return;
    }
    try {
        const cart = await Cart.findByIdAndUpdate(id, req.body, {
            new: true,
        }).populate("product");
        res.status(200).json(cart);
    } catch (error) {
        res.status(400).json(error);
    }
}


const deleteFromCart = async (req, res) => {
    const { id } = req.params;
    const user = req.user._id;
    const isFound = await Cart.findOne({ _id: id, user });
    if (!isFound) {
        res.status(401).json({ status: 'error', msg: 'Product not available' });
        return;
    }
    try {
        const cart = await Cart.findByIdAndDelete(id);
        res.status(200).json(cart);
    } catch (error) {
        res.status(400).json(error);
    }
}


module.exports = { addToCart, fetchCartByUser, updateCart, deleteFromCart };