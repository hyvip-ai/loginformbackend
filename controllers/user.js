
const User = require('../models/user')
const bcrypt = require('bcrypt-nodejs');
const jwt = require('../services/jwt')
function register(req,res){
    const params = req.body;
    // console.log(params)
    if(params.name && params.email && params.password){
        var user = new User();
        user.name = params.name
        User.find({email:params.email}).exec((err,users)=>{
            if(err){
                return res.send({messege:`error occured`})
            }
            if(users && users.length>=1){
                return res.send('one or more same credentials found')
            }
            else{
                    bcrypt.hash(params.password,null,null,(err,hash)=>{
                        if(err){
                            return res.send({messege:'error while making hash'})
                        }
                        user.password = hash
                        user.email = params.email
                        })
                    user.save((err,saveduser)=>{
                        if(err){
                            return res.send({messge:'error while saving user'})
                        }
                        if(saveduser){
                            return res.send({user:saveduser})
                        }
                    })
            }
        })   
    }
    else{
        res.send({messege:`ekahn theke Invalid Data`})
    }
}

function login(req,res){
    const params = req.body;
    var password= params.password
    var email = params.email
    User.findOne({email:email},(err,user)=>{
        if(err){
            return res.send({messege:"searching email error"})
        }
        if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
                if(err){
                    return res.send({messege:"comparing password error"})
                }
                if(result){
                    return res.send({token:jwt.gettoken(user)})

                }
                else{
                    res.send({messege:"password doesn't match"})
                }
            })
        }
        else{
            res.send({messege:"email not found try again"});
        }
    })
}
function getuser(req,res){
    // console.log(req.user);
    return res.send(req.user)
}

function logout(req,res){
    res.send({messege:'logout successful'});
}
module.exports={
    register,
    login,
    getuser,
    logout
}