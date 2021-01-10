import axios from "axios";

const APIkey = process.env.REACT_APP_ALPHAVANTAGE_API_KEY

const API = {
    // Gets all books
    getStockNames: (query) => {
        return axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${APIkey}`);
    },
    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};

export default API;