const sequelize = require("../config/db.config");

// Model
const Like = require("../models/blogLike");



module.exports.addLikes = async (req, res) => {
   const isAlreadyLike = Like.findOne( {where: { userId: req.body.userId }} );
   if(isAlreadyLike){
    await Like.create({
      // user_id: req.body.user_id,
      BlogId: req.body.BlogId,
      status:req.body.status,
      userId: req.body.userId,

    }).then(()=>{
      return res.status(200).send({
        message:'remove',
        code:200
    }).catch((error)=>{
      return res.status(400).send({
          message:'failed',
          code:400,
          error
      });
  })
    })
   }
  sequelize.sync().then(async () => {
    await Like.create({
      // user_id: req.body.user_id,
      BlogId: req.body.BlogId,
      status:req.body.status,
      userId: req.body.userId,

    }).then(()=>{
        return res.status(200).send({
            message:'add',
            code:200
        });
    }).catch((error)=>{
        return res.status(400).send({
            message:'failed',
            code:400,
            error
        });
    })
          
  });
};

