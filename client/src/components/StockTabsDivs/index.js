function StockTabsDivs(props) {
    return (
        <div id={props.symbol} className="col s12">
            <h5>COMPANY NAME &#40;{props.symbol}&#41;</h5>
            <button className="waves-effect waves-light btn" onClick={() => props.onClick(props.id)}>
                Delete Stock
            </button>
            <ul>
                <li><strong>ID:</strong> {props.id} <br /> <strong>Symbol:</strong> {props.symbol} <br /> <strong>Status:</strong> {props.status}</li>
            </ul>
        </div>
    )
}

export default StockTabsDivs;