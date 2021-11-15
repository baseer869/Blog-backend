const { DataTypes }  =  require('sequelize');
const sequelize = require('../config/db.config');
const Like = require('./blogLike');
const Comment = require('./comment');
const CommentReply = require('./commentsReply');

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
     status:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
     },
     attachement:{
         type: DataTypes.BLOB,
         allowNull: true
     },
    //   user_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    // }

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

Blog.hasMany(CommentReply, {as:"CommentReply" })
CommentReply.belongsTo(Blog,{
    foreignKey:'BlogId',
    as:'Blog'
});


module.exports = Blog

// https://www.bezkoder.com/sequelize-associate-one-to-many/
// https://sequelize.org/master/manual/assocs.html
// https://sequelize.org/master/manual/eager-loading.html
// https://infinitbility.com/node.js-sequelize-query-examples