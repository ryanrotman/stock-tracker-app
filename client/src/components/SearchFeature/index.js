import { useState } from "react";
import API from "../../utils/API";
import SearchBox from "../SearchBox";
import SearchResults from "../SearchResults";
import SearchResultsBtn from "../SearchResultsBtn";

function SearchFeature() {

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
                />
            </div>
        </div>
    )
};

export default SearchFeature;