const { DataTypes }  =  require('sequelize');
const sequelize = require('../config/db.config');
const Blog = require('./blog');
const Comment = require('./comment');


const CommentReply  = sequelize.define('CommentReply', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    replytext:{
       type: DataTypes.STRING,
       allowNull: false,
    },
    
     status:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
     },
     userId:{
        type: DataTypes.INTEGER,
        allowNull: false
     },
    // userId: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //               model: user,
    //               key: 'id',
    //             }
    // },
     
}, 
{
    updatedAt: false
}) 

module.exports = CommentReply