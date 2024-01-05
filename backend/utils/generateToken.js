const jwt = require('jsonwebtoken');
const JWT_SECRET="nabin-bibek-ecommerce";

const generateToken = (id)=> {
    try {
        return jwt.sign({id}, JWT_SECRET, {
            expiresIn:"7d"
        })
        
    } catch (error) {
        console.log(error);
        return "null";
        
    }
    
}

module.exports = generateToken;