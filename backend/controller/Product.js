const { Product } = require("../model/Product")

const createProduct = async (req, res) => {
    const product = new Product(req.body);
    if (!req.body.title ||
        !req.body.description ||
        !req.body.price ||
        !req.body.discountPercentage ||
        !req.body.brand ||
        !req.body.category ||
        !req.body.thumbnail ||
        !req.body.images
    ) {
        res.status(400).json({ error: "Please Enter required Fields" });
        return;
    }

    try {
        const data = await product.save();
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json(error);
    }

}

const fetchAllProducts = async (req, res) => {
    let product = Product.find({})

    if (req.query.category)
        product = product.find({ "category": req.query.category });

    if (req.query.brand)
        product = product.find({ brand: req.query.brand });

    if (req.query._sort && req.query._order)
        product = product.sort({ [req.query._sort]: req.query._order });

    if (req.query._page && req.query._limit) {
        const pageSize = req.query._limit;
        const page = req.query._page
        product = product.skip(pageSize * (page - 1)).limit(pageSize);
    }


    try {
        const data = await product.exec();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }

}

module.exports = { createProduct, fetchAllProducts };