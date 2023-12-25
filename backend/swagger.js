const swaggerAutogen = require('swagger-autogen')();
const doc ={
    info:{
        title: "Ecommerce Backend API",
        description:"API for Ecommerce Project DEveloped by Nabin Bhandari and Bibek Bhusal"
    },
    host:'localhost:5000'
};

const outputFile= './swagger-output.json';
const routes =['./index.js'];

swaggerAutogen(outputFile, routes, doc);