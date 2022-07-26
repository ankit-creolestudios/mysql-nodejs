const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

let sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PWD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectOptions: {
      decimalNumbers: true,
    },
  }
);

module.exports = sequelize;
