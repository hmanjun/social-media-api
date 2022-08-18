const router = require('express').Router()

//install controllers

//add controllers to get and post
router.route('/').get().post()

router.route('/:userId').get()

router.route('/:userId/friends/friendId').post().delete()

module.exports = router