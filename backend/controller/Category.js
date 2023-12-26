const { Category } = require("../model/Category");


const createCategory = async (req, res) => {
    const category = new Category(req.body);
    if (!req.body.label ||
        !req.body.value
    ) {
        res.status(400).json({ error: "Please Enter required Fields" });
        return;
    }

    try {
        const data = await category.save();
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json(error);
    }

}

const fetchCategories = async (req,res) => {
    try {
        const categories = await Category.find({}).exec();
        res.status(200).json(categories);
        
    } catch (error) {
        res.status(400).json(err);
    }
};

module.exports = {fetchCategories, createCategory};