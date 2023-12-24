const express = require('express');
const server = express();

const PORT= 5000;

server.get('/', (req,res)=> {
    res.send("Server is RUNNING.")
})

server.listen(PORT, ()=> {
    console.log(`Server Started at PORT: ${PORT}`);
})