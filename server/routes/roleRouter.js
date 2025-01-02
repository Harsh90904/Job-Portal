const {Router} = require('express');
const { registerUser, loginUser } = require('../controllers/roleController');
const { decode } = require('../middlewares/decode');

const rolerouter = Router();

rolerouter.post('/signup', registerUser);
rolerouter.post('/login', loginUser);

module.exports = rolerouter;
