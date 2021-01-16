import Plot from 'react-plotly.js';

function StockGraphs(props) {

    return (
        <div id="data-graph">
            <Plot
                data={[
                    {
                        x: props.xValues,
                        y: props.yValues,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'red' },
                    },
                ]}
                layout={{ width: 1000, height: 540 }}
                // config={{responsive:true}}
                // divId={"data-graph"}
            />
            {/* see the x,y values on the page */}
            {/* <p>x-values: {this.state.stockChartXValues}</p>
            <p>y-values: {this.state.stockChartYValues}</p> */}
        </div>

        // FIXME: LEAVING THE BELOW CODE FOR NOW FOR DEV PURPOSES IN CASE ABOVE CODE IS WRONG
        // <div className="row">
        //         <div className="col s12">
        //         <ul className="tabs tabs-fixed-width z-depth-1">
        //             {props.stocks.map(stock => (
        //             <li key={stock.symbol} className="tab"><a href={`#${stock.symbol}`}>{stock.symbol}</a></li>
        //             ))}
        //         </ul>
        //         </div>
        //         {props.stocks.map(stock => (
                // FIXME: WORK STILL NEED DONE ON STOCKDATAGRAPH COMPONENT (PROPS TO SELECT STOCK SYMBOL AND MOVE OF API CALL)
                // <div key={stock.symbol} id={stock.symbol} className="col s12">
                //     <h5>COMPANY NAME &#40;{stock.symbol}&#41;</h5>
                //     <ul>
                //     <li><strong>User:</strong> {stock.user} <br /> <strong>Symbol:</strong> {stock.symbol} <br /> <strong>Status:</strong> {stock.status}</li>
                //     </ul>
                    // {/* <p><StockDataGraph
                    //     stockSymbol={stock.symbol}
                    // /></p> */}
            //     </div>
            //     ))}
            // </div>
    )
}

export default StockGraphs;