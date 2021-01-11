const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
    // TODO: fix the below schema
    user: { type: String, required: true },
    symbol: { type: String, required: true },
    status: { type: String, required: true }
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;