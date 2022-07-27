const express = require("express");
const router = express.Router();
const productRoute = require("./product-routes");
const categoryRoute = require("./category-routes");

router.use("/category", categoryRoute);
router.use("/product", productRoute);
router.use("/user");
module.exports = router;
