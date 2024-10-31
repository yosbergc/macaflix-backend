const express = require('express')
const router = express.Router()
const movie = require('../schemas/Pelicula')
const checkUser = require('../middlewares/checkUser')

router.get('/', checkUser, async (req, res) => {
    const Pelicula = await movie.findAll()
    res.json(Pelicula)
})

module.exports = router;