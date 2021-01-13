function StockTabs(props) {
    return (
        <li className="tab"><a href={`#${props.symbol}`}>{props.symbol}</a></li>
    )
}

export default StockTabs;