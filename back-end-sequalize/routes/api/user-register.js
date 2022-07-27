const express = require("express");
const { User } = require("../../models");
const router = express.Router();
router.post("/", (req, res) => {
  User.create()
});
