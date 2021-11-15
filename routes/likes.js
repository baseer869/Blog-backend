const express = require('express');
const router = express.Router();
require('dotenv').config();
const api  = process.env.API_URL;

/////////////////////////////////////////
//         controller                  //
/////////////////////////////////////////

const likes = require('../controller/likes');

router.post(`${api}/addLikes`,  likes.addLikes );

module.exports = router;