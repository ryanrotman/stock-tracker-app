const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes); // <- Any routes that match "/api/books" go into here

module.exports = router;
