const express = require('express')
const todoRouter = express.Router()
const uuid = require('uuid').v4

const todos = [
    {
        name: 'Clean the house',
        description: 'Clean the house',
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxp_hDBnFeJgXTDIaLYCbha6t3Y3gva-Z_lw&s",
        completed: false,
        _id: uuid()
    },
    {
        name: 'pick up poo',
        description: "Murphy's poo needs picked up",
        imageUrl: "https://www.thesprucepets.com/thmb/iV1sLysQUOq_GaBJjiYLM5Joy2k=/2119x0/filters:no_upscale():strip_icc()/GettyImages-1172177946-c6004f53d0c04b638be6331033cac082.jpg",
        completed: false,
        _id: uuid()
    }
    
    ]

// get all

todoRouter.get('/', (req, res) => {
    res.send(todos)
})


// get one

todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

// delete one

todoRouter.delete("/todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const todoName = todos[todoIndex].name

    todos.splics(foundTodo, 1)
    res.send(`sucessfully deleted ${todoName}`)
})

// add one

todoRouter.post('/', (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid()
    todos.push(newTodo)
    res.send(`successfully added ${newTodo.name} to your list`)
})

// update one

todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
})

module.exports = todoRouter