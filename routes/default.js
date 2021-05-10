'user strict'
const express = require('express')
const api = express.Router();
const default_controller = require('../controllers/deafult')

api.get('/status',default_controller.status)

module.exports = api