const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: true
    },
    lastName: {
        type: String,
        required: false,
    },
    living: {
        type: Boolean,
        required: false,
    },
    bountyAmount: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    }   
})

module.exports = mongoose.model("Bounty", bountySchema) 

// const bounties = [
//     {
//         firstName: "Luke",
//         lastName: "SkyWalker",
//         living: true,
//         bountyAmount: 100000,
//         type: "Jedi",
//         _id: uuid()
//     },
//     {
//         firstName: "Han",
//         lastName: "Solo",
//         living: true,
//         bountyAmount: 70000,
//         type: "Smuggler",
//         _id: uuid()
//     },
//     {
//         firstName: "Darth",
//         lastName: "Hideous",
//         living: false,
//         bountyAmount: 5000,
//         type: "Sith",
//         _id: uuid()
//     },
//     {
//         firstName: "Chewbacca",
//         living: true,
//         bountyAmount: 70000,
//         type: "Wookie",
//         _id: uuid()
//     },
    
// ]