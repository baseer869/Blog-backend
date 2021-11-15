const express = require('express');
const router = express.Router();
require('dotenv').config();
const api  = process.env.API_URL;

/////////////////////////////////////////
//         controller                  //
/////////////////////////////////////////

const feeds = require('../controller/feed');

router.post(`${api}/feeds`,  feeds.postFeed );

module.exports = router;