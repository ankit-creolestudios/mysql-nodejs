const express = require("express");
const router = express.Router();
const { Product, Category } = require("../../models");
router.get("/", async (req, res) => {
  try {
    const productRes = await Product.findAll();

    res.status(200).json(productRes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const singleProductRes = await Product.findByPk(req.params.id);
    if (!singleProductRes) {
      res.status.json(503).json("no product id");
    }
    res.status(200).json(singleProductRes);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/create", (req, res) => {
  try {
    Product.create(req.body).then((product) => {
      res.status(200).json(product);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
