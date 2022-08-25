const jwt = require('jsonwebtoken1');
const bcrypt = require('bcryptjs');
const asyncHandler =  require('express-async-handler');
const User = require('../models/userModel');

// @desc    create new user
// @route   POST /api/users
// @access  public
const registerUser = async (req, res) => {
    res.json({ "message": "Register User"})
};

// @desc    login/authenticate user
// @route   POST /api/users/login
// @access  public
const loginUser = async (req, res) => {
    res.json({ "message": "Authenticate User"})
};

// @desc    get user info from db
// @route   GET /api/users/me
// @access  public
const getMe = async (req, res) => {
    res.json({ "message": "user info from db here"})
};


module.exports = {
    registerUser, loginUser, getMe
};