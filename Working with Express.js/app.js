const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded( {extended : false}));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');      
})    

// This middleware only trigger for incoming post request. It's a filter.
app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');     // Instead of using res.setHeader() and res.write(), 
})                                                // we can simply use res.send() now to send the response with express.js  
  

app.listen(3000);