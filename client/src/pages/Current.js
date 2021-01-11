import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Stock from "../components/Stock";
import SearchFeature from "../components/SearchFeature";
import API from "../utils/API";

function Current() {

    const [stocks, setStocks] = useState([])

    const { user } = useAuth0();

    useEffect(() => {
        loadStocks();
    }, []);

    function loadStocks() {
        const currentUser = user.sub;

        // FIXME: api call is not returning the stated user and status, it's returning the whole database
        API.getStock({
            user: currentUser,
            status: "current"
        }).then((res) => {
            console.log("LOAD CURRENT STOCKS RES: ", res);
            setStocks(res.data);
        }).catch((err) => console.log(err));
    };

    return (
        <div className="container">
            <h3 className="center-align">Stocks Currently Invested In</h3>
            <br />
            <div className="row">
                <SearchFeature />
            </div>
            {/* <p>This is an example of the stock graph brought in:</p> */}
            {/* <Stock /> */}
            <h6>Saved Stocks - Current:</h6>
            <ul>
                {stocks.map(stock => (
                    <li><strong>User:</strong> {stock.user} <br /> <strong>Symbol:</strong> {stock.symbol} <br /> <strong>Status:</strong> {stock.status} <br /> ----------</li>
                ))}
            </ul>
        </div>
    )
}

export default Current;