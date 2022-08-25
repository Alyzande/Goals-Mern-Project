const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
  let token

  //check http headers for authorisation object. use express to access headers
  //Sites that use authorization : Bearer token
  //format are most likely implementing OAuth 2.0 
  //see https://www.rfc-editor.org/rfc/rfc6750
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header, removing 'bearer '
      token = req.headers.authorization.split(' ')[1]

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from the token. In decoded User object, not password
      req.user = await User.findById(decoded.id).select('-password')

      //move on to next middleware
      next()
    } catch (error) {
      console.log(error)
      //authenticated but not authorised
      res.status(403)
      throw new Error('Not authorized')
    }
  }

  if (!token) {
    //authenticated but not authorised
    res.status(403)
    throw new Error('Not authorized, no token')
  }
})

module.exports = { protect }