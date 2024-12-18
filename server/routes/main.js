const express = require("express");
const router = express.Router();

// Define a GET route for the path "/" that renders the index view
router.get("/", (req, res) => {
  // Render articles index view
  const articles = [
    { title: 'Article 1', createdAt: new Date(), description: 'Description of article 1' },
    { title: 'Article 2', createdAt: new Date(), description: 'Description of article 2' },
    { title: 'Article 3', createdAt: new Date(), description: 'Description of article 3' },
  ];
  res.render("articles/index", { articles: articles });
});

module.exports = router;
