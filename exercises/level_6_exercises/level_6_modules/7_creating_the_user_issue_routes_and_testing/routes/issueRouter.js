const express = require("express")
const Issue = require("../models/issue")
const issueRouter = express.Router()

// post
issueRouter.post("/", async (req, res, next) => {
    try {
        req.body.userId = req.auth._id 
        const newIssue = new Issue(req.body)
        const savedIssue = await newIssue.save()
        return res.status(201).send(savedIssue)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})


// get

issueRouter.get('/:userId', async (req, res, next) => {
    try {
        const foundIssues = await Issue.find({userId: req.params.userId})
        return res.status(200).send(foundIssues)
        
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

module.exports = issueRouter