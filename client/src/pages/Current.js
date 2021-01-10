import Stock from "../components/Stock";
import SearchFeature from "../components/SearchFeature";

function Current() {
    return (
        <div className="container">
            <h3>THIS IS THE CURRENTLY INVESTED IN PAGE</h3>
            <p>This is a test of the Alphavantage Search Endpoint to get company stock info:</p>
            <SearchFeature />
            {/* <p>This is an example of the stock graph brought in:</p> */}
            {/* <Stock /> */}
        </div>
    )
}

export default Current;