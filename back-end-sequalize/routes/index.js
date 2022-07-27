const apiRoutes = require("./api");
const express = require("express");
const router = express.Router();
router.use("/api", apiRoutes);

router.use((_req, res) => {
  res.send("<div>route is wrong</div>");
});

module.exports = router;
