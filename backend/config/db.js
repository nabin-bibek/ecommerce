const mongoose = require('mongoose');

const connectDB= async ()=> {
    try {
         const conn = await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
         console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
         
     } catch (error) {
         console.log(`Error: ${error.message}`.red.bold);
         process.exit();
         
     }
 }

 module.exports = connectDB;