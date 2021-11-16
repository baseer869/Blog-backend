const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 300;

// APP LEVEL MIDDLE_WARE
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// ROUTER IMPORT
const user = require('./routes/user')
const feed = require('./routes/feed');
const blog = require('./routes/blog');
const comment = require('./routes/comment');
const likes = require('./routes/likes');
const commentReply = require('./routes/commentsReply');



//API 
app.use(user)
app.use(feed);
app.use(blog);
app.use(comment);
app.use(commentReply)
app.use(likes);

 app.get('/', (req, res ) =>{
    res.send('helloe ')
 })


// SERVER 
app.listen(PORT, () =>{
    console.log(`server is running on port http://localhost:${PORT}`)
})

// DB CONFIG
require('./config/db.config');