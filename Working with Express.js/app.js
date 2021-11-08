const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next(); // Allows the request to continue to the next middleware in line
})

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>The "Add Product" Page</h1>');      
})                                                

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');     // Instead of using res.setHeader() and res.write(), 
})                                                // we can simply use res.send() now to send the response with express.js  


app.listen(3000);