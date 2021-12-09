const { Sequelize } = require("sequelize");

// Development env
const sequelize = new Sequelize("greenage_services", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// Production env
// const sequelize = new Sequelize("greenage_db", "greenage_greenage", "Greenage@2020!!", {
//     host: "localhost",
//     dialect: "mysql",
//   });

sequelize
  .authenticate()
  .then((success) => {
    console.log(`Database connection successfull...`);
  })
  .catch((error) => {
    console.log(`Not connected to database...${error}`);
  });

  module.exports = sequelize;

