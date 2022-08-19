const {User} = require('../models')

async function getUser(req,res) {
    try{
        const userData = await User.find()
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
} 

async function getSingleUser(req,res) {
    try {
        const userData = await User.find({_id: req.params.userId}).select('-__v')
        ! userData ? res.status(404).json({message: `No user found with that id`})
        : res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function createUser(req,res) {
    try {
        const userData = await User.create(req.body)
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function updateUser(req,res) {
    try {
        const userData = await User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        ! userData ? res.status(404).json({message: `No user found with that id`})
        : res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {getUser, getSingleUser, createUser, updateUser}