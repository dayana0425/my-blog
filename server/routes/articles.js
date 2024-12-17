const express = require("express");
const router = express.Router();

module.exports = router; // Export the router object

router.get("/", (req, res) => { // Define a route for the path "/articles"
  res.send("In articles route");
});
