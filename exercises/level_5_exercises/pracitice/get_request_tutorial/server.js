// First Express Server

const express = require("express")
const app = express()


// Fake Data

const users = [
    {
        name: "Ty",
        age: 36,
        job: "developer"
    },
    {
        name: "John",
        age: 24,
        job: "Vet"
    },
    {
        name: "Joel",
        age: 12,
        job: "student"
    },
    {
        name: "Mariah",
        age: 32,
        job: "Professor"
    },
    {
        name: "Monica",
        age: 19,
        job: "Hair Stylest"
    },
    
]



//TWO ARGUMENTS
    // 1. Endpoint (mount path)
    // 2. CallBack function
app.get("/users", (req, res) => {
    res.send(users)

        // EXPRESS WILL AUTOMATICALLY TURN WHAT YOU SEND INTO A JSON OBJECT
    
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