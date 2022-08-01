import express from "express";
import sequelize from "./config/connection";
import app from "./server/server";
import dotenv from "dotenv";
dotenv.config();
app.use(express.json());

sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`server listen port ${process.env.PORT}`);
  });
});
