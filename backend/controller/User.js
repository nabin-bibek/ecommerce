const {User} = require('../model/User');

const updateUser= async (req, res)=> {
    const {id} = req.params;
    try {
        const user= await User.findByIdAndUpdate(id, req.body, {new:true});
        
         res
           .status(200)
           .json({
             id: user.id,
             email: user.email,
             name: user.name,
             address: user.address,
           });
    } catch (error) {
        res.status(400).json(error);
    }

}

const fetchUserById= async(req, res) => {
    const {id} = req.params;
    try {
        const user= await User.findById(id, 'id email name address orders');
        res.status(200).json(user);
        
    } catch (error) {
        res.status(400).json(error);
        
    }
}

module.exports = {updateUser, fetchUserById}