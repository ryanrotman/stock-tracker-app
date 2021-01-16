function SearchResultsBtn(props) {
    return (
        <button className="col s12 waves-effect waves-teal btn-flat" data-value={props.symbol} data-company={props.name} onClick={props.onClick}>
            {props.symbol} | {props.name} | {props.region}
        </button>
    )
}

export default SearchResultsBtn;