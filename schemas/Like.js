const sequelize = require('../libs/sequelize');
const { DataTypes } = require('sequelize')
const Pelicula = require('./Pelicula')

const Like = sequelize.define('like', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
})

Pelicula.hasMany(Like)
Like.belongsTo(Pelicula)

module.exports = Like;