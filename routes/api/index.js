const router = require("express").Router();
const stockRoutes = require("./stocks");

// Book routes
router.use("/stocks", stockRoutes); // <- Any routes that match "/api/stocks" go into here

module.exports = router;
