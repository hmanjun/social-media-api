const {User, Thought} = require('../models')

async function getThought(req,res) {
    try {
        const thoughtData = await Thought.find()
        res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function getSingleThought(req,res) {
    try {
        const thoughtData = await Thought.findOne({_id: req.params.thoughtId})
        ! thoughtData ? res.status(404).json({message: `No thought found with that id`})
        : res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function createThought(req,res) {
    try {
        const thoughtData = await Thought.create(req.body)
        const userData = await User.findOneAndUpdate(
            {_id: req.body.userId},
            {$push: {thoughts: thoughtData._id}},
            {new: true}
        )
        ! userData ? res.status(404).json({message: `No user found with id`})
        : res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function updateThought(req,res) {
    try {
        const thoughtData = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        ! thoughtData ? res.status(404).json({message: `No thought found with that id`})
        : res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function deleteThought(req,res) {
    try {
        const thoughtData = await Thought.findOneAndDelete({_id: req.params.thoughtId})
        if(!thoughtData) {
            res.status(404).json({message: `No thought found with that id`})
            return
        }
        const userData = await User.findOneAndUpdate(
            {thoughts: req.params.thoughtId},
            {$pull: {thoughts: req.params.thoughtId}},
            {new: true}
        )
        ! thoughtData ? res.status(404).json({message: `No user found with that thought`})
        : res.status(200).json({message: `Thought removed from user thought's`})
    } catch (err) {
        res.status(500).json(err)
    }
}

async function createReaction(req,res) {
    try {
        const thoughtData = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$push: {reactions: req.body}},
            {runValidators: true, new: true}
        )
        ! thoughtData ? res.status(404).json({message: `No thought found with that thought id`})
        : res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function deleteReaction(req,res) {
    try {
        const thoughtData = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$pull: {reactions: {reactionId: req.body.reactionId}}},
            {runValidators: true, new: true}
        )
        ! thoughtData ? res.status(404).json({message: `No thought found with that thought id`})
        : res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {getThought,getSingleThought,createThought,updateThought,deleteThought, createReaction, deleteReaction}