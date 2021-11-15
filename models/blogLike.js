const { DataTypes }  =  require('sequelize');
const sequelize = require('../config/db.config');


const Like  = sequelize.define('Like', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    status:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
}, 
{
    updatedAt: false
}) 

module.exports = Like