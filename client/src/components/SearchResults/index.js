import SearchResultsBtn from "../SearchResultsBtn";

function SearchResults(props) {
    return (
        <div className="col s12">
            <div className="card horizontal">
                <div className="card-stacked">
                    <div className="card-content">
                    {props.stockNames.length ? (
                        props.stockNames.map(stockName => (
                            <SearchResultsBtn
                                key={stockName["1. symbol"]}
                                symbol={stockName["1. symbol"]}
                                name={stockName["2. name"]}
                                region={stockName["4. region"]}
                                onClick={props.onClick}
                            />
                        ))
                    ) : (
                        <h6 className="center-align"><strong>No Search Results to Display</strong></h6>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResults;