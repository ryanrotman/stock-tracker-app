import SearchFeature from "../components/SearchFeature";

function Interested() {
    return (
        <div className="container">
            <h3 className="center-align">Stocks Interested In</h3>
            <br />
            <div className="row">
                <SearchFeature />
            </div>
        </div>
    )
}

export default Interested;