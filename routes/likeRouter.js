const express = require('express')
const router = express.Router()
const like = require('../schemas/Like')
const checkUser = require('../middlewares/checkUser')

router.post('/', checkUser, async (req, res) => {
    const { userId } = req
    const { movieId } = req.body

    try {
        const newLike = await like.create({
            usuarioId: userId,
            peliculaId: movieId
        })
    
        res.json(newLike)
    } catch (error) {
        res.status(500).send('We got one error with the request.')
    }
})

module.exports = router;