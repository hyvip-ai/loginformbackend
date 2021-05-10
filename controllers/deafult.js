'use strict'

function status(req,res){
    res.send({
        message:"app running",
        name:'login form',
        version : '1.0.0',
        developedBy:'Rajat'
    })
}
module.exports={
    status
}