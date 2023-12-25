const express = require('express');
const server = express();
const colors = require('colors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const connectDB = require('./config/db');
const productRouter = require('./routes/Product');


const PORT= 5000;

connectDB().catch(err => console.log(err));

server.get('/', (req,res)=> {
    res.send("Server is RUNNING.");
})
server.use(express.json());
server.use('/product', productRouter);

server.listen(PORT, ()=> {
    console.log(`Server Started at PORT: ${PORT}`.bgGreen);
    console.log('VISIT:http://localhost:5000'.green);
    console.log(`API DOCS at: http://localhost:${PORT}/api-docs`.yellow.bold);
})

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));