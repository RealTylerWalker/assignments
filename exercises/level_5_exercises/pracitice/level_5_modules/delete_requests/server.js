

const express = require("express")
const app = express()

// Middleware (for every request) //
app.use(express.json()) //Looks for a request body, and turns it into 'req.body'


// Routes //

app.use("/bounties", require("./routes/bountyRouter.js"))         




app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})