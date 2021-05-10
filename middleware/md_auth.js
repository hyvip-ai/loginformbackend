'use strict'
const jwt = require('jwt-simple');
const secret = "rajat-secret-1-2-3"
function authenticate(req,res,next){
    // console.log(req.headers.auth)
    if(!req.headers.auth){
        return res.send({messsege:`inavlid token`})
    }
    var token = req.headers.auth
    // console.log('md_auth:'+token)
    var payload = jwt.decode(token,secret)
    req.user = payload;
    next();
}

module.exports = {
    authenticate
}