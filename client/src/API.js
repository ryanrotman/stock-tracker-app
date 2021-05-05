import axios from "axios";

const APIkey = process.env.REACT_APP_ALPHAVANTAGE_API_KEY

const API = {
    // Get stock names/symbols
    getStockNames: (query) => {
        return axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${APIkey}`);
    },
    // Get stock data for graph
    getStockData: (query) => {
        return axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${query}&apikey=${APIkey}`);
    },
    // Get stock with the given id
    getStock: function (stockData) {
        console.log("STOCK DATA: ", stockData);
        return axios.get("/api/stocks/", {params: stockData});
    },
    // Delete stock with the given id
    deleteStock: function (id) {
        return axios.delete("/api/stocks/" + id);
    },
    // Save stock to the database
    saveStock: function (stockData) {
        return axios.post("/api/stocks", stockData);
    },
    // Update stock in the database with the given id
    updateStock: function (id, {status}) {
        return axios.put("/api/stocks/" + id, {status});
    }
};

export default API;