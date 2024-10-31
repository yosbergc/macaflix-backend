const express = require('express')
const bcrypt = require('bcrypt')
const Usuario = require('../schemas/Usuario')
const router = express.Router()

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
        res.status(201).json('User created successfully')
    } catch(error) {
        res.status(400).send('We got one error, try again later.')
    }
})

router.get('/', async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios)
})
module.exports = router;