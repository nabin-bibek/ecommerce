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
        )
        {
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

module.exports = {createProduct};