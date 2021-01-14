import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SearchBox from "../components/SearchBox";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";
// import StockGraphs from "../components/StockGraphs";
import StockTabs from "../components/StockTabs";
import StockTabsDivs from "../components/StockTabsDivs";
import M from "materialize-css";

function Current() {

    const [stocks, setStocks] = useState([])
    const [stockNames, setStockNames] = useState([]);
    const [formInput, setFormInput] = useState({
        search: ""
    });

    const { user } = useAuth0();

    useEffect(() => {
        console.log("LOADING STOCKS FROM DATABASE");
        loadStocks();
    }, []);

    function tabInit() {
            let el = document.querySelectorAll('.tabs');
            // TODO: to avoid the overuse of the API call at the beginning of tabs being built, use the onShow function option in the init
            // TODO: adjust the below onTabShow function to have that be the API call to get the stock data to build the graph
            M.Tabs.init(el, { onShow: onTabShow });
    }

    function onTabShow() {
        console.log("STOCK GRAPH CONTENT SHOULD LOAD NOW");
    }

    function handleInputChange(event) {
        const { value } = event.target;
        setFormInput({
            search: value
        })
    }

    console.log("FORM INPUT----------> ", formInput);

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formInput.search) {
            API.getStockNames(formInput.search).then((res) => {
                // console.log("API RES----------> ", res);
                // console.log("API RES.DATA----------> ", res.data);
                console.log("API RES.DATA.BESTMATCHES----------> ", res.data.bestMatches);
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
        console.log("StockSelection: ", `Stock ${stockSymbol} has been selected for the ${status} page.`);
        console.log("LOGGED IN USER: ", user.sub);

        API.saveStock({
            user: user.sub,
            symbol: stockSymbol,
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
            status: "current"
        }).then((res) => {
            console.log("LOAD CURRENT STOCKS RES: ", res);
            setStocks(res.data);
            tabInit();
        }).catch((err) => console.log(err));
    };

    function handleStockDelete(id) {
        console.log("ID OF STOCK BEING DELETED", id);
        API.deleteStock(id)
            .then(res => loadStocks())
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
            .catch(err => console.log(err))

        M.toast({html: `Stock has been moved to ${value}!`})
    }

    return (
        <div className="container">
            <h3 className="center-align">Stocks Currently Invested In</h3>
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
            <h6>Stock Graph Section:</h6>
            {/* TODO: FIXME: BUILD OUT NEW COMPONENT (EX. STOCKGRAPHFEATURE) TO HOLD BELOW CODE FOR CLEANER LOOK */}
            {/* <StockGraphs
                stocks={stocks}
                onClick={() => handleStockDelete()}
            /> */}
            <div className="row">
                <div className="col s12">
                    <ul className="tabs tabs-fixed-width z-depth-1">
                        {stocks.map(stock => (
                            <StockTabs
                                key={stock._id}
                                symbol={stock.symbol}
                            />
                        ))}
                    </ul>
                </div>
                {stocks.map(stock => (
                    <StockTabsDivs
                        key={stock._id}
                        symbol={stock.symbol}
                        status={stock.status}
                        id={stock._id}
                        newStatus={"interested"}
                        onClick={() => handleStockDelete(stock._id)}
                        onUpdate={handleStockUpdate}
                    />
                ))}
            </div>
        </div>
    )
}

export default Current;