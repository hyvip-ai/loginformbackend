'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const secret = "rajat-secret-1-2-3"
function gettoken(user){
    var payload = {
        sub:user._id,
        name:user.name,
        email:user.email

    }

    
    var token = jwt.encode(payload,secret)
    return token;
}

module.exports = {
    gettoken
}