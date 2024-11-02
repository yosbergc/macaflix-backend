const sequelize = require('../libs/sequelize');
const { DataTypes } = require('sequelize')

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
    },
    edadMinima: {
        type: DataTypes.STRING,
        allowNull: false
    },
    director: {
        type: DataTypes.STRING,
        allowNull: false
    },
    trailerLink: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Pelicula;