import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SearchBox from "../components/SearchBox";
import SearchResults from "../components/SearchResults";
import StockTabs from "../components/StockTabs";
import StockTabsDivs from "../components/StockTabsDivs";
import M from "materialize-css";
import API from "../utils/API";

function Interested() {

    const [stocks, setStocks] = useState([])
    const [stockNames, setStockNames] = useState([]);
    const [formInput, setFormInput] = useState({
        search: ""
    });
    const [stockChartXValues, setStockChartXValues] = useState([]);
    const [stockChartYValues, setStockChartYValues] = useState([]);
    const [stockData, setStockData] = useState([]);

    const { user } = useAuth0();

    useEffect(() => {
        // console.log("LOADING STOCKS FROM DATABASE");
        loadStocks();
    }, []);

    function tabInit() {
        let el = document.querySelectorAll('.tabs');
        M.Tabs.init(el, { onShow: onTabShow });
        onTabShow();
    }

    function onTabShow() {
        // console.log("STOCK GRAPH CONTENT SHOULD LOAD NOW");
        let stockSymbol = document.querySelector(".active").innerHTML;
        // console.log("STOCK SYMBOL OF SELECTED TAB", stockSymbol);

        let stockChartXValuesList = [];
        let stockChartYValuesList = [];

        API.getStockData(stockSymbol).then((res) => {
            // console.log("DATA FROM GRAPH BUILD API CALL: ", res.data);
            let data = res.data
            for (var key in data["Time Series (Daily)"]) {
                stockChartXValuesList.push(key);
                stockChartYValuesList.push(data["Time Series (Daily)"][key]["4. close"]);
            }
            // console.log("X VALUES: ", stockChartXValuesList);
            // console.log("Y VALUES: ", stockChartYValuesList);
            setStockChartXValues(stockChartXValuesList);
            setStockChartYValues(stockChartYValuesList);
            setStockData(data)
        }).catch(err => console.log(err));
    }

    function handleInputChange(event) {
        const { value } = event.target;
        setFormInput({
            search: value
        })
    }

    // console.log("FORM INPUT----------> ", formInput);

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formInput.search) {
            API.getStockNames(formInput.search).then((res) => {
                // console.log("API RES----------> ", res);
                // console.log("API RES.DATA----------> ", res.data);
                // console.log("API RES.DATA.BESTMATCHES----------> ", res.data.bestMatches);
                setStockNames(res.data.bestMatches);
            })
            .then(() => setFormInput({
                search: ""
            })).catch(err => console.log(err));
        };
    };

    function handleStockSelection(event) {
        event.preventDefault();
        // console.log("StockSelection----------> ", event);
        // console.log("Window: ", window);
        let status = window.location.pathname;
        status = status.slice(1)
        let stockSymbol = event.target.dataset.value;
        let company = event.target.dataset.company;
        // console.log("StockSelection: ", `Stock ${stockSymbol} has been selected for the ${status} page.`);
        // console.log("LOGGED IN USER: ", user.sub);

        API.saveStock({
            user: user.sub,
            symbol: stockSymbol,
            company: company,
            status: status
        })

        loadStocks();
        setStockNames([]);

        M.toast({html: `Stock ${stockSymbol} has been saved!`})
    }

    function loadStocks() {
        const currentUser = user.sub;

        API.getStock({
            user: currentUser,
            status: "interested"
        }).then((res) => {
            console.log("LOAD CURRENT STOCKS RES: ", res);
            setStocks(res.data);
            tabInit();
        }).catch((err) => console.log(err));
    };

    function handleStockDelete(id) {
        // console.log("ID OF STOCK BEING DELETED", id);
        API.deleteStock(id)
            .then(res => loadStocks())
            .then(res => onTabShow())
            .catch(err => console.log(err))
        
        M.toast({html: `Stock has been deleted!`})
    }

    function handleStockUpdate(event) {
        event.preventDefault;
        // console.log("StockUpdate----------> ", event);
        // console.log("StockUpdate-ID---------> ", event.target.id);
        // console.log("StockUpdate-NEWSTATUS---------> ", event.target.value);
        const { id, value } = event.target;

        API.updateStock(id, {status: value})
            .then(res => loadStocks())
            .then(res => onTabShow())
            .catch(err => console.log(err))

        M.toast({html: `Stock has been moved to ${value}!`})
    }

    return (
        <div className="container">
            <h3 className="center-align">Stocks Interested In</h3>
            <br />
            <div className="row">
                <div className="col s12 m6 card">
                    <SearchBox
                        onChange={handleInputChange}
                        name="search"
                        onClick={handleFormSubmit}
                        value={formInput.search}
                    />
                </div>
                <div className="col s12 m6">
                    <SearchResults
                        stockNames={stockNames}
                        onClick={handleStockSelection}
                    />
                </div>
            </div>
            {/* Stock Graph Section */}
            <div className="row">
                <div className="col s12">
                    <ul className="tabs tabs-fixed-width z-depth-1">
                        {stocks.length ? (
                            stocks.map(stock => (
                                <StockTabs
                                key={stock._id}
                                symbol={stock.symbol}
                            />    
                            ))
                        ) : (
                            <li className="tab"><strong>No Stocks Have Been Saved</strong></li>
                        )}
                    </ul>
                </div>
                {stocks.map(stock => (
                    <StockTabsDivs
                        key={stock._id}
                        symbol={stock.symbol}
                        company={stock.company}
                        status={stock.status}
                        id={stock._id}
                        newStatus={"current"}
                        onClick={() => handleStockDelete(stock._id)}
                        onUpdate={handleStockUpdate}
                        xValues={stockChartXValues}
                        yValues={stockChartYValues}
                        stockData={stockData}
                    />
                ))}
            </div>
        </div>
    )
}

export default Interested;