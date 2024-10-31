const sequelize = require('../libs/sequelize')
const { DataTypes } = require('sequelize')
const Like = require('../schemas/Likes')
const Pelicula = sequelize.define('pelicula', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageSource: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duracion: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Pelicula.hasMany(Like)
Like.belongsTo(Pelicula)

module.exports = Pelicula;