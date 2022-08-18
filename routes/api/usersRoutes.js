const router = require('express').Router()

//install controllers
const {getUser,getSingleUser} = require('../../controllers/userController')

//add controllers to get and post
router.route('/').get(getUser).post()

router.route('/:userId').get(getSingleUser)

router.route('/:userId/friends/friendId').post().delete()

module.exports = router