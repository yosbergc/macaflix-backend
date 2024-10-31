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
        return res.status(404).send('Movie not found.')
    }
    
    res.json(movieFound)
})
router.post('/', async (req, res) => {
    const { nombre, imageSource, descripcion, duracion } = req.body

    const nuevaPelicula = await movie.create({
        nombre,
        imageSource,
        descripcion,
        duracion
    })

    res.json(nuevaPelicula)
})
module.exports = router;