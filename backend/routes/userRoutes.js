//user routes
//register/create user, log in, get user info
const express = require('express');
const router = express.Router();
const { registerUser} = require('../controllers/userController');

router.post('/', registerUser);

module.exports = router