import Stock from "../components/Stock";
import SearchFeature from "../components/SearchFeature";

function Current() {
    return (
        <div className="container">
            <br />
            <div className="row">
                <SearchFeature />
            </div>
            {/* <p>This is an example of the stock graph brought in:</p> */}
            {/* <Stock /> */}
        </div>
    )
}

export default Current;