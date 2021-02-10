function SearchBox(props) {
    return (
        <div id="search-section">
            <h5>Search for a Stock</h5>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="company-name" type="text" className="validate" {...props} />
                        <label htmlFor="company-name">Company Name or Stock Symbol</label>
                        </div>
                    </div>
                    <div className="left-align">
                        <button className="btn waves-effect waves-light" type="submit" name="action" {...props}>Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchBox;