const express = require('express');
const server = express();
const colors = require('colors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const connectDB = require('./config/db');
const productRouter = require('./routes/Product');
const categoryRouter = require('./routes/Category');
const brandRouter = require('./routes/Brand');
const userRouter = require('./routes/User');
const authRouter = require('./routes/Auth');
const cartRouter = require('./routes/Cart');
const orderRouter = require('./routes/Order');

const PORT = 5000;

connectDB().catch(err => console.log(err));

server.get('/', (req, res) => {
    res.send("Server is RUNNING.");
})
server.use(express.json());
server.use('/product', productRouter);
server.use('/category', categoryRouter);
server.use('/brand', brandRouter);
server.use('/user', userRouter);
server.use('/auth', authRouter);
server.use('/cart', cartRouter);
server.use('/order', orderRouter);

server.listen(PORT, () => {
    console.log(`Server Started at PORT: ${PORT}`.bgGreen);
    console.log('VISIT:http://localhost:5000'.green);
    console.log(`API DOCS at: http://localhost:${PORT}/api-docs`.yellow.bold);
})

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));