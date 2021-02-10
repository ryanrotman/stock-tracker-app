import { Link } from "react-router-dom";
import "./index.css"

function CurrentChoice() {
    return (
        <div className="col s12 m6">
            <h4 className="header center-align">Current Stocks:</h4>
            <div className="card horizontal">
            <div className="card-stacked">
                <div className="card-action center-align">
                <Link to="/current" className="link-current">Click here to view current stocks</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CurrentChoice;