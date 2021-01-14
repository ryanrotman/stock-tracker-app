import StockGraphs from "../StockGraphs";

function StockTabsDivs(props) {
    return (
        <div id={props.symbol} className="col s12">
            <h5>COMPANY NAME &#40;{props.symbol}&#41;</h5>
            <button className="waves-effect waves-light btn" onClick={() => props.onClick(props.id)}>
                Delete Stock
            </button>
            <button className="waves-effect waves-light btn" value={props.newStatus} id={props.id} onClick={props.onUpdate}>
                Move to {props.newStatus}
            </button>
            <StockGraphs
                xValues={props.xValues}
                yValues={props.yValues}
            />
            {/* <ul>
                <li><strong>Open:</strong> {props.stockData["1. open"]} <br /> <strong>High:</strong> {props.stockData["2. high"]} <br /> <strong>Low:</strong> {props.stockData["3. low"]} <br /> <strong>Close:</strong> {props.stockData["4. close"]}</li>
            </ul> */}
        </div>
    )
}

export default StockTabsDivs;