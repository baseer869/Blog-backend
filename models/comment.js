const { DataTypes }  =  require('sequelize');
const sequelize = require('../config/db.config');
const CommentReply = require('./commentsReply');


const Comment  = sequelize.define('Comment', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    comments_text:{
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
    // BlogId: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //               model: Blog,
    //               key: 'id',
    //             }
    // },


    //  foreign_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: 'register_user',
    //       key: 'id',
    //     }
    // }
     
}, 
{
    updatedAt: false
}) 
module.exports = Comment