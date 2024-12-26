const express = require('express');
const { registerUser, loginUser } = require('../controllers/roleController');

const rolerouter = express.Router();

rolerouter.post('/signup', registerUser);
rolerouter.post('/login', loginUser);

module.exports = rolerouter;
