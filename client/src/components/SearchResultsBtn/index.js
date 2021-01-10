function SearchResultsBtn(props) {
    return (
        <button className="waves-effect waves-teal btn-flat">
            {props.key} | {props.name} | {props.region}
        </button>
    )
}

export default SearchResultsBtn;