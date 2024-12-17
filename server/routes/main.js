const express = require("express");
const router = express.Router();

// defining a route for the path "/" that renders the index.ejs file
router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
