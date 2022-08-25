const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel');
const User = require('../models/userModel');

// @desc    get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    //await becuase async
    const goals = await Goal.find({ user: req.user.id })
    res.status(200).json(goals)
})


// @desc    set goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
   if(!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
   }
   const goal = await Goal.create ({
    text: req.body.text,
    user: req.user.id
   })
    res.status(200).json(goal)
})

// @desc    update goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    //no goal with that id?
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    // Check for user
    const user= await User.findById(req.user.id);

    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    // goal has a user field, to string 
    if (goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
    res.status(200).json(updatedGoal)
})

// @desc    delete goals
// @route   DEL /api/goals/:id
// @access  private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

        // Check for user
        const user= await User.findById(req.user.id);

        if (!user) {
            res.status(401)
            throw new Error('User not found')
        }
    
        // Make sure the logged in user matches the goal user
        // goal has a user field, to string 
        if (goal.user.toString() !== req.user.id) {
            res.status(401)
            throw new Error('User not authorized')
        }


    await goal.remove()
    res.status(200).json({ id: req.params.id })
})


module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}