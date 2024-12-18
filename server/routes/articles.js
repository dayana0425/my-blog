const express = require("express");
const router = express.Router();

module.exports = router; 

// Define a GET route for the path "/new"
router.get("/new", (req, res) => {
  res.render("articles/new", { article: {} });
});

// Define a POST route for the path "/"
router.post("/", (req, res) => {
  res.send("Create");
});
