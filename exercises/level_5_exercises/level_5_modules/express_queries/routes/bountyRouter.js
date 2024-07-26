const express = require('express')
const bountyRouter = express.Router()
const uuid = require("uuid").v4

const bounties = [
    {
        firstname: "Luke",
        lastname: "SkyWalker",
        living: true,
        bountyamount: 100000,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstname: "Han",
        lastname: "Solo",
        living: true,
        bountyamount: 70000,
        type: "Smuggler",
        _id: uuid()
    },
    {
        firstname: "Darth",
        lastname: "Hideous",
        living: false,
        bountyamount: 5000,
        type: "Sith",
        _id: uuid()
    },
    {
        firstname: "Chewbacca",
        lastname: "none",
        living: true,
        bountyamount: 70000,
        type: "Wookie",
        _id: uuid()
    },
    
]

// get all

bountyRouter.get("/", (req, res) => {
    res.send(bounties)   
})

// get one

bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

// Get by bounty amount

bountyRouter.get("/search/bountyamount", (req, res) => {
    const bountyAmount = Number(req.query.bountyamount)
    const filteredBountyByAmount = bounties.filter(bounty => bounty.bountyamount === bountyAmount)
    res.send(filteredBountyByAmount)
})

// Get by first name

bountyRouter.get("/search/firstname", (req, res) => {
    const firstName = req.query.firstname
    const filteredBountyByFirstName = bounties.filter(bounty => bounty.firstname === firstName)
    res.send(filteredBountyByFirstName) 
})

// Get by Last Name 

bountyRouter.get("/search/lastname", (req, res) => {
    const lastName = req.query.lastname
    const filteredBountyByLastName = bounties.filter(bounty => bounty.lastname === lastName)
    res.send(filteredBountyByLastName)
})

// Get by living

bountyRouter.get("/search/living", (req, res) => {
    const living = req.query.living === "true"
    const filteredBountyByLiving = bounties.filter(bounty => bounty.living === living)
    res.send(filteredBountyByLiving)
})

// get by type

bountyRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredBountyByType = bounties.filter(bounty => bounty.type === type)
    res.send(filteredBountyByType)
})

// post one

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    // Add a unique ID to every new post request
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} to the database`)
})



module.exports = bountyRouter