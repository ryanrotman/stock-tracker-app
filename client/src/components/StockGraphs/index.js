function StockGraphs(props) {

    return (
        <div className="row">
                <div className="col s12">
                <ul className="tabs tabs-fixed-width z-depth-1">
                    {props.stocks.map(stock => (
                    <li key={stock.symbol} className="tab"><a href={`#${stock.symbol}`}>{stock.symbol}</a></li>
                    ))}
                </ul>
                </div>
                {props.stocks.map(stock => (
                // FIXME: WORK STILL NEED DONE ON STOCKDATAGRAPH COMPONENT (PROPS TO SELECT STOCK SYMBOL AND MOVE OF API CALL)
                <div key={stock.symbol} id={stock.symbol} className="col s12">
                    <h5>COMPANY NAME &#40;{stock.symbol}&#41;</h5>
                    <ul>
                    <li><strong>User:</strong> {stock.user} <br /> <strong>Symbol:</strong> {stock.symbol} <br /> <strong>Status:</strong> {stock.status}</li>
                    </ul>
                    {/* <p><StockDataGraph
                        stockSymbol={stock.symbol}
                    /></p> */}
                </div>
                ))}
            </div>
    )
}

export default StockGraphs;