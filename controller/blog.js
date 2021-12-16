const sequelize = require("../config/db.config");
// Model
const Blog = require("../models/blog");
const Like = require("../models/blogLike");
const Comment = require('../models/comment');
const CommentReply = require('../models/commentsReply');
const multer = require('multer');

const FILE_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype]
    let uploadError = new Error("Invalid Image type");
    if (isValid) {
      uploadError = null
    }
    cb(uploadError, './uploads')
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split('').join('-');
    const extension = FILE_TYPE_MAP[file.mimetype]

    cb(null, `${Date.now()}-${fileName}.${extension}`)
  }
})


// blog headings data 
const dummy = [
  {
    id: 1,
    heading: "dasdasdasdadsadasda",
    text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not ",
    createdAt: "2021-12-15T22:39:47.000Z",
    BlogId: 12
  },
  {
    id: 2,
    heading: "dasdasdasdadsadasda",
    text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not ",
    createdAt: "2021-12-15T22:55:05.000Z",
    BlogId: 12
  }
]

var text = JSON.stringify(dummy);

module.exports.upload = multer({ storage: storage });

module.exports.postBlog = async (req, res) => {
  const filename = req.file.filename
   res.send(text);

  // const text = JSON.stringify(req.body.text)
  console.log('text-->', text)
  const basePath = `https://www.greenageservices.pk/blogs/uploads/`;
  sequelize.sync().then(async () => {
    await Blog.create({
      title: req.body.title,
      text: text,
      attachement: `${basePath}${filename}`,
      status: req.body.status,
      userId: req.body.userId
    }).then(() => {
      return res.status(200).send({
        message: 'success',
        status: 200
      });
    }).catch((error) => {
      return res.status(400).send({
        message: 'failed',
        code: 400,
        error,
      });
    })

  });
};




//GET ALL BLOGS 


module.exports.getAllBlogs = async (req, res) => {
  let blogs;
  const page = req.query.page;
  function getPagination(page, size) {
    const limit = 10;
    const offset = page ? page * limit : 0;

    return { limit, offset };
  };
  const { limit, offset } = getPagination(page)

  try {
    blogs = await Blog.findAndCountAll({
      limit: limit, offset: offset, include: [
        
        {
          model: Comment,
          as: 'comments',

        },
        {
          model: Like,
          as: 'likes',
          attributes: ['userId']
        },
      ],
      where: { status: req.query.status === '1' || '0' },
      attributes: { exclude: ['text'] },

    })
  } catch (error) {
    return res.status(400).send({
      message: 'failed, no blogs found',
      status: 400,
      error
    });
  }
  if (!blogs) {
    return res.status(400).send({
      message: 'failed, no blogs found',
      status: 400,
      blogs
    });
  }

  return res.status(200).send({
    message: 'success',
    status: 200,
    blogs
  });
};

// GET TEXT BY ID 
module.exports.getBlogText = async (req, res) => {

  sequelize.sync().then(async () => {
    const isblog = await Blog.findOne({ attributes: ['text'], where: { id: req.query.id, } });
    if (!isblog) {
      return res.status(400).send({
        message: 'No blog found',
        status: 400,
      });
    }
    return res.status(200).send({
      status: 200,
      error: false,
      text: isblog
    });

  });
};

//UPDATE STATUS 

module.exports.updateStatus = async (req, res) => {

  sequelize.sync().then(async () => {
    const isFound = await Blog.findOne({ where: { id: req.body.id, } });
    if (!isFound) {
      return res.status(200).send({
        message: 'No blog found',
        status: 200
      });
    }
    const isApprove = await Blog.update({ status: req.body.status, }, { where: { id: req.body.id } });
    if (isApprove) {
      return res.status(200).send({
        message: 'Approved',
        status: 200,
        error: false,
      });
    } else {
      return res.status(400).send({
        message: 'Something went wrong, try again',
        status: 400,
        error: true,
      });
    }
  });
};




//GET BLOG 

module.exports.getBlog = async (req, res) => {

  const blogs = await Blog.findOne({ where: { user_id: req.query.id } })
  if (!blogs) {
    return res.status(400).send({
      message: 'failed, no blogs found',
      status: 400,
      blogs
    });
  }
  return res.status(200).send({
    message: 'success',
    status: 200,
    blogs
  });
};



