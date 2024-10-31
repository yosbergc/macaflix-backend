require('dotenv').config()
const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    const authorization = req.get('authorization')
    if (!authorization || !authorization.toLowerCase().startsWith('bearer')) {
        return res.status(400).send('We detected a problem with your token.')
    }

    const token = authorization.slice(7, authorization.length)

    try {
        const informacionRecibida = jwt.verify(token, process.env.PRIVATE_WORD)
        req.userId = informacionRecibida.id
        req.rol = informacionRecibida.rol
        next()
    } catch(error) {
        return res.status(400).send('Bad token')
    }

    
}