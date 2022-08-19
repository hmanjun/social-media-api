const router = require('express').Router()

//install controllers
const {getUser,getSingleUser,createUser} = require('../../controllers/userController')

//add controllers to get and post
router.route('/').get(getUser).post(createUser)

router.route('/:userId').get(getSingleUser)

router.route('/:userId/friends/friendId').post().delete()

module.exports = router