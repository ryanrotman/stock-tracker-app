import { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import LoginBtn from "../LoginBtn"
import LogoutBtn from "../LogoutBtn";
import AuthenticationBtn from "../AuthenticationBtn";

function Nav() {

    useEffect(() => {
        let sidenav = document.querySelector('#nav-mobile');
        M.Sidenav.init(sidenav, {});
    }, []);

    return (
        <div>
            <div className="navbar-fixed">
                <nav className="black" role="navigation">
                    <div className="nav-wrapper container">
                    <Link to="/" id="logo-container" className="brand-logo">Stock Tracker</Link>
                    <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/current">Current Stocks</Link></li>
                            <li><Link to="/interested">Interested Stocks</Link></li>
                            <li><AuthenticationBtn /></li>
                        </ul>
                    </div>
                </nav>
            </div>

            <ul id="nav-mobile" className="right sidenav">
                <li className="white-text"><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/current">Current Stocks</Link></li>
                <li><Link to="/interested">Interested Stocks</Link></li>
                <li><AuthenticationBtn /></li>
            </ul>
        </div>
    );
}

export default Nav;
