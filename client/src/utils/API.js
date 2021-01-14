import axios from "axios";

const APIkey = process.env.REACT_APP_ALPHAVANTAGE_API_KEY

const API = {
    // Gets stock names/symbols
    getStockNames: (query) => {
        return axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${APIkey}`);
    },
    // Gets stock data for graph
    getStockData: (query) => {
        return axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${query}&apikey=${APIkey}`);
    },
    // Gets the stock with the given id
    getStock: function (stockData) {
        console.log("STOCK DATA: ", stockData);
        return axios.get("/api/stocks/", {params: stockData});
    },
    // Deletes the stock with the given id
    deleteStock: function (id) {
        return axios.delete("/api/stocks/" + id);
    },
    // Saves a stock to the database
    saveStock: function (stockData) {
        return axios.post("/api/stocks", stockData);
    },
    // Updates a stock in the database with the given id
    updateStock: function (id, {status}) {
        return axios.put("/api/stocks/" + id, {status});
    }
};

export default API;