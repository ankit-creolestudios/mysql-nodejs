const express = require("express");
const route = require("./routes");
const sequelize = require("./config/connection");
const app = require("./server/server.js");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(express.urlencoded());

app.use(route);
sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`server listen port ${process.env.PORT}`);
  });
});
