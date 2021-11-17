const sequelize = require("../config/db.config");
// Model
const Blog = require("../models/blog");
const Like = require("../models/blogLike");
const Comment = require('../models/comment');
const CommentReply = require('../models/commentsReply');
const multer  = require('multer')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/Users/Public')
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split('').join('-'); 
    cb(null, fileName + '-' + Date.now())
  }
})

 
module.exports.upload = multer({ storage: storage });

module.exports.postBlog = async (req, res) => {

const filename = req.file.filename
const basePath = `${req.protocol}://${req.get('host')}/Users/Public`                  // http://localhost:3000/pulic/uploa/i2323.png
  sequelize.sync().then(async () => {
    await Blog.create({
      title: req.body.title,
      text: req.body.text,
      attachement: `${basePath}${filename}`,
      status: req.body.status,
      userId: req.body.userId
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
          as: 'likes',
          attributes: ['userId']
          
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


