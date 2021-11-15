const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("greenage_services", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then((success) => {
    console.log(`Database connection successfull...`);
  })
  .catch((error) => {
    console.log(`Not connected to database...${error}`);
  });

  module.exports = sequelize;