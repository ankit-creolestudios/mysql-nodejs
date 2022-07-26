import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import mysql from "mysql2";
import * as bodyParser from "body-parser";
import { orderRouter } from "./routes/orderRoutes";
import { authRouter } from "./routes/authRoutes";
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    methods: ["POST", "PUT", "PATCH", "UPDATE", "DELETE", "GET"],
  })
);
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
app.use("/auth", authRouter);
app.listen(process.env.PORT || 5000, () => {
  console.log("server start port " + process.env.PORT);
});
