const sequelize = require('../libs/sequelize')
const { DataTypes } = require('sequelize')

sequelize.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    clave: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    }
})