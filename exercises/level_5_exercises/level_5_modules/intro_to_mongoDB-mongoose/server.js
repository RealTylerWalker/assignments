

const express = require("express")
const app = express()
const morgan = require("morgan")
require("dotenv").config()
const mongoose = require("mongoose")

// Middleware (for every request) //
app.use(express.json()) //Looks for a request body, and turns it into 'req.body'
app.use(morgan('dev'))

async function connectToDb(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connected to DB')
    } catch(err){
        console.log(err)
    }
}

connectToDb()

// Routes //

app.use("/api/bounties", require("./routes/bountyRouter.js"))         


// Error Handler

app.use( (err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => { 
    console.log("The server is running on Port 9000")
})

// mongodb+srv://tylerbarscott:Hv4prRyqaypdij81@firstcluster.uozjzkh.mongodb.net/