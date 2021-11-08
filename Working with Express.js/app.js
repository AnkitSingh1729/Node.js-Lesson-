// const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // Allows the request to continue to the next middleware in line
})

app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');     // Instead of using res.setHeader() and res.write(), 
})                                                // we can simply use res.send() now to send the response with express.js  


// Older version
// const server = http.createServer(app);
// server.listen(3000);

// Using express
app.listen(3000);