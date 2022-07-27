const { Category, Product } = require("../../models");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const categoryRes = await Category.findAll();
    res.status(200).json(categoryRes);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const singleCategoryRes = await Category.findByPk(req.params.id);
    if (!singleCategoryRes) {
      res.status(503).json({ message: "no category id" });
    }
    res.status(200).json(singleCategoryRes);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
