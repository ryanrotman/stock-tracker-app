import { Link } from "react-router-dom";
import "./index.css"

function InterestedChoice() {
    return (
        <div className="col s12 m6">
            <h4 className="header center-align">Interested In Stocks:</h4>
            <div className="card horizontal">
            <div className="card-stacked">
                <div className="card-action center-align">
                <Link to="/interested" className="link-interested">Click here to view interested in stocks</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default InterestedChoice;