const sequelize = require('../libs/sequelize')
const { DataTypes } = require('sequelize')
const Pelicula = require('../schemas/Pelicula')
const Usuario = require('../schemas/Usuario')

const Like = sequelize.define('like', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    peliculaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Pelicula,
            key: 'id'
        }
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id'
        }
    }
})

module.exports = Like;