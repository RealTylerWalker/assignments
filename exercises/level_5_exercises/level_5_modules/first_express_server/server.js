// First Express Server

const express = require("express")
const app = express()

    //TWO ARGUMENTS
    // 1. Endpoint (mount path)
    // 2. CallBack function
app.get("/profile", (req, res) => {
    res.send({
        name: "Tyler",
        age: 36,
        job: "developer"

        // EXPRESS WILL AUTOMATICALLY TURN THIS OBJECT INTO A JSON OBJECT
    })
})




//Listen needs two arguments... 1. PORT    2: Call back function
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})


// IF you recall, whenever you changed the server number or the endpoint,
// the webpage server would no longer display content, this is because your code
// is only read once, upon starting the server...

// IF YOU WANT TO BE ABLE TO CHANGE YOUR CODE AND HAVE YOUR PAGE UPDATE AUTOMATICALLY,
// THAN YOU NEED Nodemon. You only need to install it once.