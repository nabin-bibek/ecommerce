const jwt = require('jsonwebtoken');
const {User} = require("../model/User");
const JWT_SECRET="nabin-bibek-ecommerce";


const protect = async(req,res,next) => {
    let token;
    if(req.headers.authorization && 
        req.headers.authorization.startsWith("Bearer")
     )
     {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password");
            next();
        } catch (error) {
            res.status(401).json({"status":"error", "message":"Not Authorized"}) 
        }
     }
     else
     {
        res.status(401).json({"status":"error", "message":"No token sent"}) 
     }
};

module.exports = {protect}