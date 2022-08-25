const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler =  require('express-async-handler');
const User = require('../models/userModel');

// @desc    create new user
// @route   POST /api/users
// @access  public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    
    if (!name || !email || !password) {
      res.status(400) //bad request
      throw new Error('Please add all fields')
    }

    //check if user exists
    const userExists = await User.findOne({email})

    //if user email (unique!) already there, then user exists already
    if(userExists) {
      res.status(400)
      throw new Error('User already exists')
    }

    //hash pw
    //generate salt, 10 rounds default
    const salt = await bcrypt.genSalt(10)
    //takes plain pw and salt
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    if(user) {
        //status OK && something was created
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            //token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

    //original testing
    //res.json({ "message": "Register User"})
});

// @desc    login/authenticate user
// @route   POST /api/users/login
// @access  public
const loginUser = asyncHandler(async (req, res) => {
    res.json({ "message": "Authenticate User"})
});

// @desc    get user info from db
// @route   GET /api/users/me
// @access  public
const getMe = asyncHandler(async (req, res) => {
    res.json({ "message": "user info from db here"})
});


module.exports = {
    registerUser, loginUser, getMe
};