const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("greenage_db", "greenage_greenage", "Greenage@2020!!", {
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