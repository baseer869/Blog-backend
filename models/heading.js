const { DataTypes }  =  require('sequelize');
const sequelize = require('../config/db.config');


const Heading  = sequelize.define('Heading', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    heading:{
       type: DataTypes.STRING,
       allowNull: false,
    },
    text:{
        type: DataTypes.STRING,
        allowNull: false,
     },
    
}, 
{
    updatedAt: false
}, ) 


module.exports = Heading;
