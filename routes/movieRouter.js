const express = require('express')
const router = express.Router()
const movie = require('../schemas/Pelicula')
const checkUser = require('../middlewares/checkUser')

router.get('/', checkUser, async (req, res) => {
    const Pelicula = await movie.findAll()
    res.json(Pelicula)
})
router.get('/:id', checkUser, async (req, res) => {
    const { id } = req.params
    const movieFound = await movie.findByPk(id)

    if (!movieFound) {
        return res.status(404).json('Movie not found.')
    }
    
    res.json(movieFound)
})
router.post('/', async (req, res) => {
    const { nombre, imageSource, descripcion, duracion, edadMinima, director, trailerLink } = req.body

    if (!nombre || !imageSource || !descripcion || !duracion || !edadMinima || !director || !trailerLink) {
        return res.status(400).json('Bad request')
    }
    const nuevaPelicula = await movie.create({
        nombre,
        imageSource,
        descripcion,
        duracion,
        edadMinima,
        director,
        trailerLink
    })

    res.json(nuevaPelicula)
})
module.exports = router;