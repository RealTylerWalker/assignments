const express = require('express')
const bountyRouter = express.Router()
const uuid = require("uuid").v4

const bounties = [
    {
        firstName: "Luke",
        lastName: "SkyWalker",
        living: true,
        bountyAmount: 100000,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstName: "Han",
        lastName: "Solo",
        living: true,
        bountyAmount: 70000,
        type: "Smuggler",
        _id: uuid()
    },
    {
        firstName: "Darth",
        lastName: "Hideous",
        living: false,
        bountyAmount: 5000,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Chewbacca",
        living: true,
        bountyAmount: 70000,
        type: "Wookie",
        _id: uuid()
    },
    
]

bountyRouter.get("/", (req, res) => {
    res.send(bounties)   
})

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    // Add a unique ID to every new post request
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} to the database`)
})



module.exports = bountyRouter