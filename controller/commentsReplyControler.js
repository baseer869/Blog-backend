const sequelize = require("../config/db.config");

// Model
const CommentsReply = require("../models/commentsReply");

module.exports.postComments = async (req, res) => {

    sequelize.sync().then(async () => {
        await CommentsReply.create({
            replytext: req.body.replytext,
            status: req.body.status,
            CommentId: req.body.CommentId,
            BlogId: req.body.BlogId,
            userId: req.body.userId

        }).then(() => {
            return res.status(200).send({
                message: 'reply added...',
                code: 200,
                success: true
            });
        }).catch((error) => {
            return res.status(400).send({
                message: 'failed to comment, try again',
                code: 400,
                error
            });
        })

    });
};


//Get reply of comments


module.exports.getCommentReply = async (req, res, next) => {

    sequelize.sync().then(async () => {

        var reply = await CommentsReply.findOne({ where: { CommentId: req.query.id } });

        if (!reply) {
            return res.status(400).send({
                message: 'failed to fetch comment, try again',
                code: 201,
            });
        }
        return res.status(200).send({
            message: 'success',
            code: 200,
            reply
        });

    });
};
