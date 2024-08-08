const express = require('express')
const app = express()
const mongoose = require('mongoose')
require("dotenv").config()


//3. Third Step: Middleware to handle requests
app.use(express.json())
// 2. Second Step, connect to the database

async function connectToDb(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error)
    }
}

connectToDb()

// 4. Fourth step: connect the Routes //

app.use("/api/inventory", require("./routes/inventoryRouter.js"))

// 1. First step, opening the server connection

app.listen(9000, () => {
    console.log('Server is running on port 9000')
})