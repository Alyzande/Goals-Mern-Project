// @desc    create new user
// @route   POST /api/users
// @access  public
const registerUser = (req, res) => {
    res.json({ "message": "Register User"})
}

// @desc    login/authenticate user
// @route   POST /api/users/login
// @access  public
const loginUser = (req, res) => {
    res.json({ "message": "Authenticate User"})
}

// @desc    get user info from db
// @route   GET /api/users/me
// @access  public
const getMe = (req, res) => {
    res.json({ "message": "user info from db here"})
}


module.exports = {
    registerUser, loginUser, getMe
}