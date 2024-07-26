const express = require('express');
const app = express();
const middleware = require( './addPropertyMiddleware.js' )
// const addPropertyMiddleware = require('./addPropertyMiddleware.js'); // Import the middleware

app.use(middleware)

app.get("/", (req, res)=>{
    res.send(req.newProperty)
})





app.listen(9000, () => {
    console.log("The server is running on Port 9000");
});
