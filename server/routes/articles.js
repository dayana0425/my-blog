const express = require("express");
const router = express.Router();

module.exports = router; // Export the router object

// Define a GET route for the path "/new"
router.get("/new", (req, res) => {
  // Define a route for the path "/articles/new"
  res.render("articles/new", { article: {} });
});

// Define a POST route for the path "/"
router.post("/", (req, res) => {
  // Define a route for the path "/articles"
  res.send("Create");
});