const express = require('express')
const bcrypt = require('bcrypt')
const Usuario = require('../schemas/Usuario')
const router = express.Router()
const checkRouter = require('../middlewares/checkUser')
const Pelicula = require('../schemas/Pelicula')
const Like = require('../schemas/Like')

router.post('/', async (req, res) => {
    const { nombre, usuario, correo, clave, genero  } = req.body
    if (!nombre || !usuario || !correo || !clave || !genero) {
        return res.status(400).send('Bad request')
    }

    const claveEncriptada = await bcrypt.hash(clave, 5);

    try {
        await Usuario.create({
            nombre: nombre,
            usuario: usuario,
            correo: correo,
            clave: claveEncriptada,
            genero: genero
        })
        res.status(201).json('Usuario creado satisfactoriamente.')
    } catch(error) {
        res.status(400).json('Tuvimos un error, intenta de nuevo después.')
    }
})

router.get('/', checkRouter, async (req, res) => {
    const { userId } = req

    if (!userId) {
        return res.status(400).json('Necesitas estar logueado para poder hacer una solicitud.')
    }
    const userFound = await Usuario.findByPk(userId, {
        include: [{
            model: Like,
            include: Pelicula
        }],
        attributes: { exclude: ['clave']},
    })

    if (!userFound) {
        return res.status(404).json('Usuario no encontrado')
    }

    res.json(userFound)
})
module.exports = router;