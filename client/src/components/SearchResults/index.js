import SearchResultsBtn from "../SearchResultsBtn";

function SearchResults(props) {
    return (
        <div className="col s12">
            {/* <h2 className="header">Horizontal Card</h2> */}
            <div className="card horizontal">
                <div className="card-stacked">
                    <div className="card-content">
                    {props.stockNames.length ? (
                        props.stockNames.map(stockName => (
                            <SearchResultsBtn
                                key={stockName.symbol}
                                name={stockName.name}
                                region={stockName.region}
                            />
                        ))
                    ) : (
                        <h6 className="center-align"><strong>No Stock Results to Display</strong></h6>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResults;