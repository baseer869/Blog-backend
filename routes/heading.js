const express = require('express');
const router = express.Router();
require('dotenv').config();
const api  = process.env.API_URL;

/////////////////////////////////////////
//         controller                  //
/////////////////////////////////////////
 


const heading = require('../controller/heading');

router.post(`${api}/heading`, heading.addHeading );
router.get(`${api}/heading`, heading.getBlogHeading );



module.exports = router;