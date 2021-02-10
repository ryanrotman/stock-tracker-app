import Plot from "react-plotly.js";

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
                // TODO: FIXME: still in development is working on graph mobile responsiveness
                // config={{responsive:true}}
                // divId={"data-graph"}
            />
        </div>
    )
}

export default StockGraphs;