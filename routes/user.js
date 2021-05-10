'use strict'
const express = require('express')
const api  = express.Router();
const md_auth = require('../middleware/md_auth')

const user_controller = require('../controllers/user')
api.post('/register',user_controller.register)
api.post('/login',user_controller.login)
api.get('/getusers',md_auth.authenticate,user_controller.getuser)
api.get('/logout',md_auth.authenticate,user_controller.logout)

module.exports = api