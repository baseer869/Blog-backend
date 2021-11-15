const { DataTypes }  =  require('sequelize');
const sequelize = require('../config/db.config');


const Feed = sequelize.define('feeds', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement: true,
    },
    title:{
        type:DataTypes.STRING,
        allowNull: false,

    },
    note:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    // isApprove:{
    //     type:DataTypes.BOOLEAN,
    //     allowNull: false
    // },
    // data:{
    //     type: DataTypes.BLOB('long'),
    //     allowNull: true
    // }


});

module.exports = Feed;