const sequelize = require("../config/db.config");

// Model
const Feed = require("../models/feed");

module.exports.postFeed = async (req, res) => {
  sequelize.sync().then(async () => {
    await Feed.create({
      title: req.body.title,
      note: req.body.note,
      // isApprove: req.body.isApprove,
      //    image
    }).then(()=>{
        return res.status(200).send({
            message:'success',
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

