import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Current from "./pages/Current";
import Interested from "./pages/Interested";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Loading from "./components/Loading";
import ProtectedRoute from "./auth/protected-route";
import Footer from "./components/Footer";
import './App.css';
// new imports to be able to move code from pages Current and Interested to keep code DRY (also useState and useEffect above in line 1)
import M from "materialize-css";
import API from "./API";

function App() {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <Loading />;
    }

    // new code here to be able to have one code block with props that get sent to both current and interested pages
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
            status: "current"
        }).then((res) => {
            // console.log("LOAD CURRENT STOCKS RES: ", res);
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
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                <ProtectedRoute
                    render={(props) => (
                        <Current
                            {...props}
                            // TODO: insert needed props here
                        />
                    )}
                    exact path="/current"
                />
                <ProtectedRoute
                    render={(props) => (
                        <Interested
                            {...props}
                            // TODO: insert needed props here
                        />
                    )}
                    exact path="/interested"
                />
                <Route>
                    <NoMatch />
                </Route>
            </Switch>
            <footer>
                <Footer />
            </footer>
        </Router>
    );
}

export default App;
