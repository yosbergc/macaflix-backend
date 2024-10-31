require('dotenv').config()
const express = require('express')
const router = express.Router()
const Usuario = require('../schemas/Usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/', async (req, res) => {
    const { correo, clave } = req.body
    if (!correo || !clave ) {
        return res.status(400).send('Bad request')
    } 

    try {
        const usuarioEncontrado = await Usuario.findOne({ where: {
            [Op.or]: { correo: correo, usuario: correo }
        }})
    
        if (!usuarioEncontrado) {
            return res.status(400).send('Usuario/email o clave incorrecta.')
        }
        const claveCorrecta = await bcrypt.compare(clave, usuarioEncontrado.clave)
        if (!claveCorrecta) {
            return res.status(400).send('Usuario/email o clave incorrecta.')
        }
        const user = {
            id: usuarioEncontrado.id
        }
        const token = jwt.sign(user, process.env.PRIVATE_WORD, {
            expiresIn: '7d'
        })
        res.json({
            nombre: usuarioEncontrado.nombre,
            token
        })
    } catch(error) {
        res.status(500).send('Error interno del servidor')
    }
})

module.exports = router;