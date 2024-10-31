const express = require('express')
const router = express.Router()
const like = require('../schemas/Like')

router.get('/', async (req, res) => {
    const likes = await like.findAll()
    res.json(likes)
})

module.exports = router;