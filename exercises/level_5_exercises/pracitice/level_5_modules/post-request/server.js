

const express = require("express")
const app = express()
// Import uuid to be able to use unique ID's
const uuid = require("uuid").v4

// Middleware (for every request) //
app.use(express.json()) //Looks for a request body, and turns it into 'req.body'

// Fake Data

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



// Routes //
app.get("/movies", (req, res) => {
    res.send(movies)   
})

app.post("/movies", (req, res) => {
    const newMovie = req.body
    // Add a unique ID to every new post request
    newMovie._id = uuid()
    movies.push(newMovie)
    res.send(`Successfully added ${newMovie.title} to the database`)
})

//


app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})
