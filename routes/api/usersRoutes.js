const router = require('express').Router()

//install controllers
const {getUser,getSingleUser,createUser,updateUser,deleteUser,addFriend} = require('../../controllers/userController')

//add controllers to get and post
router.route('/').get(getUser).post(createUser)

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser)

router.route('/:userId/friends/:friendId').post(addFriend).delete()

module.exports = router