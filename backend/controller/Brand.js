const { Brand } = require("../model/Brand");


const createBrand = async (req, res) => {
    const brand = new Brand(req.body);
    if (!req.body.label ||
        !req.body.value
    ) {
        res.status(400).json({ error: "Please Enter required Fields" });
        return;
    }

    try {
        const data = await brand.save();
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json(error);
    }

}

const fetchBrands = async (req,res) => {
    try {
        const brands = await Brand.find({}).exec();
        res.status(200).json(brands);
        
    } catch (error) {
        res.status(400).json(err);
    }
};

module.exports = {fetchBrands, createBrand};