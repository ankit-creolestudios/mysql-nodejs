const express = require("express");
const sequelize = require("./config/connection");
const app = require("./server/server.js");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

app.use(express.urlencoded());
sequelize.sync({ force: false }).then((res) => {
  app.listen(process.env.PORT, () => {
    console.log(`server listen port ${process.env.PORT},${res}`);
  });
});
