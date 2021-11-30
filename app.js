const express = require('express');
const app = express();
const jwt = require('./helpers/jwt');

require('dotenv').config();

const PORT = process.env.PORT || 300;

// APP LEVEL MIDDLE_WARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER IMPORT
// const user = require('./routes/user')
const blog = require('./routes/blog');
const comment = require('./routes/comment');
const likes = require('./routes/likes');
const commentReply = require('./routes/commentsReply');
const error = require('./helpers/error-handler');



//API 
// app.use(user)
app.use(blog);
app.use(comment);
app.use(commentReply)
app.use(likes);
app.use('/uploads', express.static('uploads'))



app.get('/', (req, res) => {
    res.send('helloe ')
})


// SERVER 
app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`)
})

// DB CONFIG
require('./config/db.config');



// https://stackoverflow.com/questions/19075805/sequelize-associations-hasone-belongsto
// https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7
// https://medium.com/@eth3rnit3/sequelize-relationships-ultimate-guide-f26801a75554