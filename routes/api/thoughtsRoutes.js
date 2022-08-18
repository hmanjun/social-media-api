const router = require('express').Router()

router.route('/').get().post()

router.route('/:thoughtId').get()

router.route('/:thoughtId/reactions').post().delete()

module.exports = router