const express = require('express')
const router = express.Router()
const movie = require('../schemas/Pelicula')

router.get('/', async (req, res) => {
    const Pelicula = await movie.findAll()
    res.json(Pelicula)
})

module.exports = router;