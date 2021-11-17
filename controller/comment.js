const sequelize = require("../config/db.config");

// Model
const Comments = require("../models/comment");

module.exports.postComments = async (req, res) => {

    sequelize.sync().then(async () => {
        let comment;
     comment =   await Comments.create({
            comments_text: req.body.comments_text,
            status: req.body.status,
            userId: req.body.userId,
            BlogId: req.body.BlogId
        });
        if(!comment){
            return res.status(400).send({
                message: 'failed to comment, try again',
                code: 400,
                error
            });           
        }

        return res.status(200).send({
            message: 'comments added successfully',
            code: 200,
            comment
        });  
        
    });
};

//FETCH COMMENTS 

module.exports.getBlogComments = async (req, res, next ) => {

    sequelize.sync().then(async () => {

            var comments = await Comments.findOne({ where: { BlogId: req.query.id } });

       
        if (!comments) {
            return res.status(400).send({
                message: 'failed to fetch comment, try again',
                code: 201,
            });
        }
        return res.status(200).send({
            message: 'comments',
            code: 200,
            comments
        });

    });
};

//get all comment by blog id 
module.exports.getAllCommentsById = async (req, res, next ) => {

    sequelize.sync().then(async () => {

            var comments = await Comments.findAll({ where: { BlogId: req.query.id } });
        if (!comments) {
            return res.status(400).send({
                message: 'failed to fetch comment, try again',
                code: 201,
            });
        }
        return res.status(200).send({
            message: 'comments',
            code: 200,
            comments
        });

    });
};




//login user can comments
//

