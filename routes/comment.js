const express = require('express');
const router = express.Router();
require('dotenv').config();
const api  = process.env.API_URL;

/////////////////////////////////////////
//         controller                  //
/////////////////////////////////////////

const comment = require('../controller/comment');

router.post(`${api}/comments`,  comment.postComments );
router.get(`${api}/comments/`,  comment.getBlogComments );
router.get(`${api}/allcomments/`,  comment.getAllCommentsById );


module.exports = router;