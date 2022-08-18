const router = require('express').Router()

router.route('/thoughts').get().post()

router.route('/thoughts/:thoughtId').get()

router.route('/thoughts/:thoughtId/reactions').post().delete()