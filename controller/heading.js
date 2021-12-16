const sequelize = require("../config/db.config");

// Model 
const Heading = require("../models/heading");

module.exports.addHeading = async (req, res) => {

    sequelize.sync().then(async () => {
        let heading;
        
        heading = await Heading.create({
            heading: req.body.heading,
            BlogId: req.body.BlogId,
            text: req.body.text,
        });
        if(!heading){
            return res.status(400).send({
                message: 'try again',
                code: 400,
                error
            });           
        }

        return res.status(200).send({
            message: 'success',
            code: 200,
            heading
        });  
        
    });
};


//GET HEADING 

module.exports.getBlogHeading = async (req, res) => {

    const heading = await Heading.findAll({ where: { BlogId: req.query.id } })
    if (!heading) {
      return res.status(400).send({
        message: 'failed, no heading found',
        status: 400,
        heading
      });
    }
    return res.status(200).send({
      message: 'success',
      status: 200,
      heading
    });
  };
  