require('dotenv').config()
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DB_URI, {
    dialect: 'postgres',
    logging: true
})

sequelize.sync({ force: true })

module.exports = sequelize