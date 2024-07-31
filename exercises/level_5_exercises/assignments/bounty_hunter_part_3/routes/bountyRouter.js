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

// Get All

bountyRouter.get("/", (req, res) => {
    res.send(bounties)   
})

// Get one

bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})


// Post one

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    // Add a unique ID to every new post request
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send(newBounty)
})

// Delete one

bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    
    const firstName = bounties[bountyIndex].firstName
    const lastName = bounties[bountyIndex].lastName

    bounties.splice(bountyIndex, 1)
    res.send(`Successfully deleted ${firstName} ${lastName}`)
})

// Update One

bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})





module.exports = bountyRouter