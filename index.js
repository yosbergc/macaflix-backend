const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000;
const usersRouter = require('./routes/usersRouter')
const loginRouter = require('./routes/loginRouter')
const movieRouter = require('./routes/movieRouter')
const likeRouter = require('./routes/likeRouter')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/usuarios', usersRouter)
app.use('/auth', loginRouter)
app.use('/peliculas', movieRouter)
app.use('/likes', likeRouter)

app.listen(port)