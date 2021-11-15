const express = require('express');
const router = express.Router();
require('dotenv').config();
const api  = process.env.API_URL;

/////////////////////////////////////////
//         controller                  //
/////////////////////////////////////////

const commentsReply = require('../controller/commentsReplyControler');

router.post(`${api}/reply`,  commentsReply.postComments );
router.get(`${api}/reply`,  commentsReply.getCommentReply );


module.exports = router;

