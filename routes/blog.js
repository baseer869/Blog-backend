const express = require('express');
const router = express.Router();
require('dotenv').config();
const api  = process.env.API_URL;
const multer  = require('multer')

/////////////////////////////////////////
//         controller                  //
/////////////////////////////////////////
 


const blog = require('../controller/blog');

router.post(`${api}/blog`, blog.upload.single('attachement'), blog.postBlog );
router.get(`${api}/blogs/:id`,  blog.getBlog );
router.post(`${api}/blogs`,  blog.getAllBlogs );
router.get(`${api}/blog-text`,  blog.getBlogText );
router.put(`${api}/blog`,  blog.updateStatus );



module.exports = router;