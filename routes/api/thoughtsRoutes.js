const router = require('express').Router()
const {getThought,getSingleThought,createThought,updateThought,deleteThought} = require('../../controllers/thoughtController')

router.route('/').get(getThought).post(createThought)

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought)

router.route('/:thoughtId/reactions').post().delete()

module.exports = router