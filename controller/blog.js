const sequelize = require("../config/db.config");

// Model
const Blog = require("../models/blog");
const Like = require("../models/blogLike");
const Comment = require('../models/comment');
const CommentReply = require('../models/commentsReply');

module.exports.postBlog = async (req, res) => {
     
  sequelize.sync().then(async () => {
    await Blog.create({
      title: req.body.title,
      text: req.body.text,
      status: req.body.status,
    }).then(()=>{
        return res.status(200).send({
            message:'success',
            status:200
        });
    }).catch((error)=>{
        return res.status(400).send({
            message:'failed',
            code:400,
            error
        });
    })
          
  });
};
//GET ALL BLOGS 
module.exports.getAllBlogs = async (req, res) => {
   let blogs;    
  try {
        blogs =    await Blog.findAll({ include: [
          {
          model:Comment,
          as: 'comments'
        }, 
        {
          model:Like,
          as: 'likes'
          
        },
      ], 
      })      
      } catch(error){
        return res.status(400).send({
          message:'failed, no blogs found',
          status:400, 
          error
      });     
      }     
   if(!blogs){
    return res.status(400).send({
        message:'failed, no blogs found',
        status:400, 
        blogs
    });    
   }
   
    return res.status(200).send({
        message:'success',
        status:200,
        blogs
    });
};




//GET BLOG 

module.exports.getBlog = async (req, res) => {
     
      const blogs =    await Blog.findOne({ where :{ user_id : req.query.id } })
       if(!blogs){
        return res.status(400).send({
            message:'failed, no blogs found',
            status:400, 
            blogs
        });    
       }
        return res.status(200).send({
            message:'success',
            status:200,
            blogs
        });
};


//


