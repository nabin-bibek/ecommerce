const { User } = require("../model/User");

const createUser = async (req, res) => {
    if(!req.body.email || !req.body.password)
    {
        res.status(400).json({message:"Please Enter all Fields"})
        return;
    }
    const user = new User(req.body);
    try {
        const data = await user.save();
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
}

const loginUser = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
        res.status(401).json({ message: "User Not registered with us" });
    else if (user.password === req.body.password) 
        res.status(200).json({id:user.id, email:user.email, name:user.name, address:user.address})
    else
        res.status(401).json({message:'Invalid Credentials'});
}

module.exports = { createUser, loginUser }