// const { DataTypes } = require('sequelize')
// const sequelize = require('../config/db.config')
// const Blog = require('../models/blog');
// const Like = require('./blogLike');
// const Comment = require('./comment');

// const User = sequelize.define('user', {

//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         allowNull: false,
//         autoIncrement: true,
//     },
//     fullname: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     passwordHash:{
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     phone: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     cnic: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     profession: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     status: {
//         type: DataTypes.BOOLEAN,
//         allowNull: false
//     },
// }, {
//     updatedAt: true,
//     createdAt: false
// })



// User.hasMany(Blog, {
//     as: "blogs"
// });
// User.hasMany(Comment, {
//     as: "comments"
// });
// User.hasMany(Like , {
//     as: "likes",
// });

// module.exports = User;