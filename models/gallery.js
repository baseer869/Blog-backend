const { DataTypes  } = require('sequelize');
const sequelize = require('../config/db.config');

const Gallery = sequelize.define('Gallery', {
    id:{
         id: DataTypes.INTEGER,         
        primaryKey: true,
        autoIncrement: true,
        allowNull: false        
    },
    name:{
        
    }
})