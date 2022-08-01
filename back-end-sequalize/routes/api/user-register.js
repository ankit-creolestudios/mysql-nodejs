const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const router = express.Router();
router.post("/create", async (req, res) => {
  try {
    const userDuplicate = await User.findOne({
      where: { email: req.body.email },
    });
    if (userDuplicate) {
      res.status(500).json({ message: "email already exist" });
    }
    const salt = await bcrypt.genSalt(10);
    const userReq = {
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, salt),
      phone: req.body.phone,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    };
    User.create(userReq).then((user) => {
      res.status(200).json(user);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/login", async (req, res) => {
  try {
    const userRes = await User.findOne({ where: { email: req.body.email } });
    console.log(userRes, "aqr");

    if (userRes) {
      const passwordValidate = await bcrypt.compare(
        req.body.password,
        userRes.password
      );
      console.log(userRes, passwordValidate, "aqv");
      if (passwordValidate) {
        const token = jwt.sign(
          {
            id: userRes.id,
            email: userRes.email,
            name: userRes.name,
          },
          "srsrtq12"
        );
        res.status(200).json({ token: token });
      } else {
        res.status(500).json({ message: "password is not correct" });
      }
    } else {
      res.status(500).json({ message: "no user email" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
