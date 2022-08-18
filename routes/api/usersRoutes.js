const router = require('express').Router()

//install controllers

//add controllers to get and post
router.route('/users').get().post()

router.route('/users/:userId').get()

router.route('/users/:userId/friends/friendId').post().delete()