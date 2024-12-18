require("dotenv").config();

const express = require("express"); // Import express
const expressLayouts = require("express-ejs-layouts");

const mongoose = require("mongoose"); // Import mongoose

const articleRouter = require("./server/routes/articles"); // Import the articleRouter
const mainRouter = require("./server/routes/main"); // Import the mainRouter

const app = express(); // Create an express server
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(expressLayouts);

// MIDDLEWARE
mongoose.connect("mongodb://localhost/blog", { useNewUrlParser: true, useUnifiedTopology: true });

// ROUTES
app.use("/", mainRouter); // Use the mainRouter for all routes starting with '/'
app.use('/articles', articleRouter); // Use the articleRouter for all routes starting with '/articles'

app.set("layout", "./layouts/main"); // Set the default layout file to ./layouts/main.ejs
app.set("view engine", "ejs"); // Set the view engine to ejs

app.listen(PORT, () => { // Listen on port 3000 or the port defined in the .env file, if it exists.
  console.log(`My first Express app - listening on port ${PORT}!`);
});
