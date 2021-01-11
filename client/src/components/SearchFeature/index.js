import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../utils/API";
import SearchBox from "../SearchBox";
import SearchResults from "../SearchResults";
import M from "materialize-css";

function SearchFeature() {

    // TODO: FIXME: will probably need to bring all this code (except the return) up one level to the page level to be able to access the loadStocks function when a new stock is saved, then pass everything as props throughout the various components

    const { user } = useAuth0();

    const [stockNames, setStockNames] = useState([]);
    const [formInput, setFormInput] = useState({
        search: ""
    });

    function handleInputChange(event) {
        const { value } = event.target;
        setFormInput({
            search: value
        })
    }

    console.log("FORM INPUT----------> ", formInput);

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formInput.search) {
            API.getStockNames(formInput.search).then((res) => {
                console.log("API RES----------> ", res);
                // console.log("API RES.DATA----------> ", res.data);
                // console.log("API RES.DATA.BESTMATCHES----------> ", res.data.bestMatches);
                setStockNames(res.data.bestMatches);
            })
            .then(() => setFormInput({
                search: ""
            })).catch(err => console.log(err));
        };
    };

    function handleStockSelection(event) {
        event.preventDefault();
        // console.log("StockSelection----------> ", event);
        // console.log("Window: ", window);
        let status = window.location.pathname;
        status = status.slice(1)
        let stockSymbol = event.target.dataset.value;
        console.log("StockSelection: ", `Stock ${stockSymbol} has been selected for the ${status} page.`);
        console.log("LOGGED IN USER: ", user.sub);

        API.saveStock({
            user: user.sub,
            symbol: stockSymbol,
            status: status
        })

        M.toast({html: `Stock ${stockSymbol} has been saved!`})
    }

    return (
        <div>
            <div className="col s12 m6 card">
                <SearchBox
                    onChange={handleInputChange}
                    name="search"
                    onClick={handleFormSubmit}
                    value={formInput.search}
                />
            </div>
            <div className="col s12 m6">
                <SearchResults
                    stockNames={stockNames}
                    onClick={handleStockSelection}
                />
            </div>
        </div>
    )
};

export default SearchFeature;