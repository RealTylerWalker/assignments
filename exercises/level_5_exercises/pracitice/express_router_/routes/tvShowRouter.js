const express = require('express');
const tvShowRouter = express.Router();
const uuid = require('uuid').v4;

const tvshows = [
    {
        title: "Breaking Bad",
        genre: "drama",
        _id: uuid()
    },
    {
        title: "The Office",
        genre: "comedy",
        _id: uuid()
    },
    {
        title: "Dexter",
        genre: "crime",
        _id: uuid()
    },
    {
        title: "Fringe",
        genre: "Science-Fiction",
        _id: uuid()
    }
]

tvShowRouter.get("/", (req, res) => {
    res.send(tvshows)   
})

tvShowRouter.post("/", (req, res) => {
    const newShow = req.body
    // Add a unique ID to every new post request
    newShow._id = uuid()
    tvshows.push(newShow)
    res.send(`Successfully added ${newShow.title} to the database`)
})




module.exports = tvShowRouter;