import express from "express";
import * as dotenv from "dotenv";
import mysql from "mysql2";
import * as bodyParser from "body-parser";
import { orderRouter } from "./routes/orderRoutes";
dotenv.config();
const app = express();
app.use(bodyParser.json());
// database connect

export const dbConnect = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
});
dbConnect.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("mysql connect");
  }
});
app.use("/order", orderRouter);
app.listen(process.env.PORT || 4000, () => {
  console.log("server start port " + process.env.PORT);
});
