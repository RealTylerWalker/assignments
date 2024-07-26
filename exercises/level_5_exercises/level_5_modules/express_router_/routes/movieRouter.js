const express = require('express')
const movieRouter = express.Router()
const uuid = require("uuid").v4

const movies = [
    {
        title: "Die Hard",
        genre: "action",
        // Invoke uuid for every movie
        _id: uuid()
    },
    {
        title: "star wars IV",
        genre: "fantasy",
        _id: uuid()
    },
    {
        title: "Lion King",
        genre: "fantasy",
        _id: uuid()
    },
    {
        title: "friday the 13th",
        genre: "horror",
        _id: uuid()
    }  
]

movieRouter.get("/", (req, res) => {
    res.send(movies)   
})

movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    // Add a unique ID to every new post request
    newMovie._id = uuid()
    movies.push(newMovie)
    res.send(`Successfully added ${newMovie.title} to the database`)
})



module.exports = movieRouter