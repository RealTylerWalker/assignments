const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require:true
    },
    password: {
        type: String, 
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    memberSince: {
        type: Date,
        default: Date.now
    }
})


// hashing passwords
//install bcrypt

userSchema.pre('save', async function(next){
   const user = this
   if(user.isModified('password')){
    try {
        const hash = await bcrypt.hash(user.password, 10)
        user.password = hash
        
    } catch (error) {
        return next(error)
    }
   }
})

module.exports = mongoose.model("user", userSchema)