const express = require('express')
const bountyRouter = express.Router()
const uuid = require("uuid").v4
const Bounty = require("../models/bounty.js")




// Get All

bountyRouter.get("/", async(req, res) => {
    console.log(req.query)
    try {
        const foundBounties = await Bounty.find(req.query)
        return res.status(200).send(foundBounties)
    } catch (error) {
       res.status(500)
       return next(error) 
    }
})

// Get one

bountyRouter.get("/:bountyId", async (req, res, next) => {
    try {
        const bountyId = req.params.bountyId
        const foundBounty = await Bounty.findById(bountyId)
        if(!foundBounty) {
            const error = new Error(`The bounty with the id of ${bountyId} was not found.`)
            res.status(500)
            return next(error) 
        }
        return res.status(200).send(foundBounty)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})


// Post one

bountyRouter.post("/", async (req, res, next) => {
    try {
        const newBounty = new Bounty(req.body)
        const savedBounty = await newBounty.save()
        return res.status(201).send(savedBounty)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

// Delete one

bountyRouter.delete("/:bountyId", async (req, res, next) => {
  try {
    const bountyId = req.params.bountyId
    const deletedBounty = await Bounty.findByIdAndDelete(bountyId)
    return res.status(200).send(`You have successfully deleted ${deletedBounty.firstName} ${deletedBounty.lastName ? deletedBounty.lastName : ""} from the database.`)
  } catch (error) {
    res.status(500)
    return next(error)
  }

})
// Update One

bountyRouter.put('/:bountyId', async (req, res, next) => {
    try {
        const bountyId = req.params.bountyId
        const updatedBounty = await Bounty.findByIdAndUpdate(
            bountyId, 
            req.body, 
            {new: true} // telling the db we want the newest version back
        )
        return res.status(201).send(updatedBounty)
    } catch (error){
        res.status(500)
        return next(error)
    }
})

// query by first name






module.exports = bountyRouter