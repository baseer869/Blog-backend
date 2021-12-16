const { DataTypes }  =  require('sequelize');
const sequelize = require('../config/db.config');
const Like = require('./blogLike');
const Comment = require('./comment');
const CommentReply = require('./commentsReply');
const Heading = require('./heading');

const Blog  = sequelize.define('Blog', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title:{
       type: DataTypes.STRING,
       allowNull: false,
    },
    text:{
        type: DataTypes.STRING,
        allowNull: false,
     },
     userId:{
        type: DataTypes.INTEGER,
        allowNull: false
     },
     status:{
        type: DataTypes.STRING,
        allowNull: false,
     },
     attachement:{
         type: DataTypes.STRING,
         allowNull: true
     },   
     
}, 
{
    updatedAt: false
}, ) 
Blog.hasMany(Comment, {as: 'comments'});
Comment.belongsTo(Blog,{
    foreignKey:'BlogId',
    as:'Blog'
});

// LIKES
Blog.hasMany(Like, {as: 'likes'});
Like.belongsTo(Blog,{
    foreignKey:'BlogId',
    as:'Blog'
});



Comment.hasMany(CommentReply, {as:"CommentReply" });
CommentReply.belongsTo(Comment,{
        foreignKey:'CommentId',
        as:'Comment'
} 
)

Blog.hasMany(Heading, {as:"Heading" })
Heading.belongsTo(Blog,{
    as:'Blog'
});
module.exports = Blog
