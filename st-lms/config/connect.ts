import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const dbName: string = `${process.env.DB_NAME}`;
const dbUser: string = `${process.env.DB_USER}`;
const dbPwd: string = `${process.env.DB_PWD}`;
// const dbHost: string = "[localhost]";
const sequelize: Sequelize = new Sequelize(dbName, dbUser, dbPwd, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  dialectOptions: {
    decimalNumbers: true,
  },
});

async function testConnection(): Promise<boolean> {
  try {
    sequelize.authenticate();
    console.log("connection successful");
    return true;
  } catch (err) {
    console.error("unable to connect", err);
    return false;
  }
}

export default { sequelize, testConnection };
