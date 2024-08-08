const express = require("express")
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory.js")

// Get all

inventoryRouter.get("/", async (req, res) => {
    console.log(req.query)
        try {
            const foundInventory = await Inventory.find(req.query)
            return res.status(200).send(foundInventory)
        } catch (err) {
            res.status(500)
            return next(err)
        }
    })

// Get one

inventoryRouter.get("/:id", async (req, res, next) => {
    try {
        const foundInventory = await Inventory.findById(req.params.id)
        if (!foundInventory) {
            return res.status(404).send("Inventory not found")
        }
        return res.status(200).send(foundInventory)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Post one

inventoryRouter.post("/", async (req, res, next) => {
    try {
        const newInventory = await Inventory.create(req.body)
        return res.status(201).send(newInventory)
    } catch (err) {
        res.status(400)
        return next(err)
    }
})

// Delete one

inventoryRouter.delete("/:id", async (req, res, next) => {
    try {
        const deletedInventory = await Inventory.findByIdAndDelete(req.params.id)
        if (!deletedInventory) {
            return res.status(404).send("Inventory not found")
        }
        return res.status(200).send("Inventory deleted successfully")
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Edit one

inventoryRouter.put("/:id", async (req, res, next) => {
    try {
        const updatedInventory = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updatedInventory) {
            return res.status(404).send("Inventory not found")
        }
        return res.status(200).send(updatedInventory)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

module.exports = inventoryRouter