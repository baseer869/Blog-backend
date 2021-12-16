const express = require('express');
const app = express();
var cors = require('cors')
require('dotenv').config();

const PORT = process.env.PORT || 300;

// APP LEVEL MIDDLE_WARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    origin: '*'
  }))
// ROUTER IMPORT
// const user = require('./routes/user')
const blog = require('./routes/blog');
const heading = require('./routes/heading');

const comment = require('./routes/comment');
const likes = require('./routes/likes');
const commentReply = require('./routes/commentsReply');
const error = require('./helpers/error-handler');



//API 
// app.use(user)
app.use(blog);
app.use(heading);
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


// https://www.tatvasoft.com/blog/node-js-best-practices/
// https://www.perfomatix.com/nodejs-coding-standards-and-best-practices-node-js-development-company/
// https://www.codementor.io/@mattgoldspink/nodejs-best-practices-du1086jja

// https://dribbble.com/shots/14772071-Medical-Cannabis-Search
// https://www.google.com/imgres?imgurl=https%3A%2F%2Fdesignshack.net%2Fwp-content%2Fuploads%2FMaps-App-UI-Templates.jpg&imgrefurl=https%3A%2F%2Fdesignshack.net%2Farticles%2Finspiration%2Fmobile-app-templates%2F&tbnid=mheyOyWm1_fbfM&vet=12ahUKEwjm8JSsweX0AhUSxhoKHaJBDfAQMygNegUIARDHAQ..i&docid=Z-TBFQIjk_c2JM&w=1100&h=733&itg=1&q=e%20commerce%20store%20search%20mobile%20app%20design%20ui%20map&ved=2ahUKEwjm8JSsweX0AhUSxhoKHaJBDfAQMygNegUIARDHAQ