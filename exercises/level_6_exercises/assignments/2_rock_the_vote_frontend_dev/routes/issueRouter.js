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

issueRouter.get('/user', async (req, res, next) => {
    try {
        const foundIssues = await Issue.find({userId: req.auth._id})
        return res.status(200).send(foundIssues)
        
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

// get one issue
issueRouter.get('/user/:id', async (req, res, next) => {
    try {
        const foundIssue = await Issue.findOne({_id: req.params.id, userId: req.auth._id})
        if (!foundIssue) {
            return res.status(404).send("Issue not found")
        }
        return res.status(200).send(foundIssue)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

// update issue 
issueRouter.put("/:id", async (req, res, next) => {
    console.log(req.params.id, req.body)
    try {
        const id = req.params.id
        
        const updatedIssue = await Issue.findOneAndUpdate({_id: req.params.id, userId: req.auth._id}, req.body, { new: true })
        if (!updatedIssue) {
            return res.status(404).send("Issue not found")
        }
        return res.status(200).send(updatedIssue)
    } catch (error) {
        res.status(500)
        return next(error)
    }np
})

// Delete issue
issueRouter.delete("/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        const deletedIssue = await Issue.findOneAndDelete({_id: req.params.id, userId: req.auth._id})
        if (!deletedIssue) {
            return res.status(404).send("Issue not found")
        }
        return res.status(200).send(`issue with id ${id} deleted`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})
// issueRouter.delete("/:id", async (req, res, next) => {
//     try {
//         const id = req.params.id
//         const deletedIssue = await Issue.findOneAndDelete({_id: req.params.id, userId: req.auth._id})
//         if (!deletedIssue) {
//             return res.status(404).send("Issue not found")
//         }
       
//         return res.status(200).send(`issue with id ${id} deleted`)
//     } catch (error) {
//         res.status(500)
//         return next(error)
//     }
// })

module.exports = issueRouter