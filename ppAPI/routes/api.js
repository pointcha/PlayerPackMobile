// Dependecies
var express = require('express');
var router = express.Router();

// Models
var Profile = require('../models/profile');

// Routes
Profile.methods(['get', 'put', 'post', 'delete']);
Profile.register(router, '/profiles');

// Return router
module.exports = router;