import moment from "moment"
import StockGraphs from "../StockGraphs";
import "./index.css";

function StockTabsDivs(props) {

    let today = moment().format("YYYY-MM-DD");
    // let longDate = moment().format("dddd, MMMM DD, YYYY")
    console.log("TODAY IS: ", today);

    // console.log("STOCK DATA PASSED INTO TABS DIVS", props.stockData);
    // console.log("GRAB THE TIME SERIES SECTION: ", props.stockData["Time Series (Daily)"]);
    // console.log("GRAB THE CURRENT DAY: ", props.stockData["Time Series (Daily)"]["2021-01-15"]);

    // let stockDataObj = props.stockData["Time Series (Daily)"];
    // let keys = Object.keys(stockDataObj);
    // console.log("STOCK DATA KEYS:", keys);
    // console.log("THE LAST DAY OF DATA DATE: ", keys[0])
    // let longDate = moment(keys[0]).format("dddd, MMMM DD, YYYY");
    // console.log("THE LAST DAY OF DATA: ", props.stockData["Time Series (Daily)"][keys[0]]);

    let todaysData;
    let longDate;
    if (props.stockData["Time Series (Daily)"]) {
        let stockDataObj = props.stockData["Time Series (Daily)"];
        let keys = Object.keys(stockDataObj);
        todaysData = props.stockData["Time Series (Daily)"][keys[0]];
        longDate = moment(keys[0]).format("dddd, MMMM DD, YYYY");
    } ;

    // let dataObject = props.stockData["Time Series (Daily)"];

    // console.log("LIST OF KEYS: ", Object.keys(dataObject));

    // setTimeout(function(){ console.log("GRAB THE CURRENT DAY: ", props.stockData["Time Series (Daily)"][today]); }, 6000);

    return (
        <div id={props.symbol} className="col s12">
            <div className="row">
                <div className="col s12 m6">
                    <h5>{props.company} &#40;{props.symbol}&#41;</h5>
                </div>
                <div className="col s12 m6">
                    <button style={{float:"right", marginTop:"12px"}} className="waves-effect waves-light btn stock-btn" onClick={() => props.onClick(props.id)}>
                        Delete Stock
                    </button>
                    <button style={{float:"right", marginTop:"12px"}} className="waves-effect waves-light btn stock-btn" value={props.newStatus} id={props.id} onClick={props.onUpdate}>
                        Move to {props.newStatus}
                    </button>
                </div>
            </div>
            <StockGraphs
                xValues={props.xValues}
                yValues={props.yValues}
            />
            {todaysData === undefined ? <h5 className="center-align"><strong>No stock data to report.</strong></h5> : 
            <ul className="center-align stock-data-list">
                <li><strong>Stock Data from: {longDate}</strong></li>
                <li><strong>Open:</strong> {todaysData["1. open"]}</li>
                <li><strong>High:</strong> {todaysData["2. high"]}</li>
                <li><strong>Low:</strong> {todaysData["3. low"]}</li>
                <li><strong>Close:</strong> {todaysData["4. close"]}</li>
            </ul>}
        </div>
    )
}

export default StockTabsDivs;