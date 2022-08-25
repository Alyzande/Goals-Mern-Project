//custom error handler
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
  
    res.status(statusCode)
  
    res.json({
      message: err.message,
      //stack trace gives extra info but only if in development mode
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
  }
  
  module.exports = {
    errorHandler,
  }