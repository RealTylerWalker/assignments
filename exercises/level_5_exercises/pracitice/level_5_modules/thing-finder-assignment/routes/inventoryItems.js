const express = require('express')
const inventoryItems = express.Router()
const uuid = require( 'uuid' ).v4

const inventory = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuid()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuid()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuid()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuid()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuid()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuid()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuid()
    }
]

// Get all items 

inventoryItems.get('/', (req, res) => {
    res.send(inventory)
})

// Get items by type

inventoryItems.get('/search/type', (req, res) => {
    const type = req.query.type
    const filteredItems = inventory.filter(item => item.type === type)
    res.send(filteredItems)
})

// get items by name:

inventoryItems.get('/search/name', (req, res) => {
    const name = req.query.name
    const filteredItems = inventory.filter(item => item.name === name)
    res.send(filteredItems)
})

// get items by price

inventoryItems.get('/search/price', (req, res) => {
    const price = Number(req.query.price)
    const filteredItems = inventory.filter(item => item.price === price)
    res.send(filteredItems)
})

// get one item

inventoryItems.get('/:itemId', (req, res) => {
    const itemId = req.params.itemId
    const foundItem = inventory.find(item => item._id === itemId)
    res.send(foundItem)
})



module.exports = inventoryItems