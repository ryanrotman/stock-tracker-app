const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSymbolSchema = new Schema({
    user: { type: String, required: true },
    symbol: { type: String, required: true },
    company: { type: String, required: true },
    status: { type: String, required: true }
});

const StockSymbol = mongoose.model("Stock", stockSymbolSchema);

module.exports = StockSymbol;