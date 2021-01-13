const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSymbolSchema = new Schema({
    // TODO: fix the below schema
    user: { type: String, required: true },
    symbol: { type: String, required: true },
    status: { type: String, required: true }
});

const StockSymbol = mongoose.model("Stock", stockSymbolSchema);

module.exports = StockSymbol;