'user strict'

const mongoose = require('mongoose')

const schema = mongoose.Schema;

const userSchema = schema({
    name:String,
    email:String,
    password:String
})

module.exports = mongoose.model(`User`,userSchema);