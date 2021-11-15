const express = require('express');
const router = express.Router();
require('dotenv').config();
const api  = process.env.API_URL;

/////////////////////////////////////////
//         controller                  //
/////////////////////////////////////////

const blog = require('../controller/blog');

router.post(`${api}/blog`,  blog.postBlog );
router.get(`${api}/blogs/:id`,  blog.getBlog );
router.get(`${api}/blog`,  blog.getAllBlogs );


module.exports = router;