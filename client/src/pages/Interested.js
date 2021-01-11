import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SearchFeature from "../components/SearchFeature";
import API from "../utils/API";

function Interested() {

    const [stocks, setStocks] = useState([])

    const { user } = useAuth0();

    useEffect(() => {
        loadStocks();
    }, []);

    function loadStocks() {
        // FIXME: api call is not returning the stated user and status, it's returning the whole database
        API.getStock({
            user: user.sub,
            status: "current"
        }).then((res) => {
            console.log("LOAD CURRENT STOCKS RES: ", res);
            setStocks(res.data);
        }).catch((err) => console.log(err));
    };

    return (
        <div className="container">
            <h3 className="center-align">Stocks Interested In</h3>
            <br />
            <div className="row">
                <SearchFeature />
            </div>
            <h6>Saved Stocks - Interested In:</h6>
            <ul>
                {stocks.map(stock => (
                    <li><strong>User:</strong> {stock.user} <br /> <strong>Symbol:</strong> {stock.symbol} <br /> <strong>Status:</strong> {stock.status} <br /> ----------</li>
                ))}
            </ul>
        </div>
    )
}

export default Interested;