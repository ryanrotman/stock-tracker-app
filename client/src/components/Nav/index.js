import { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import AuthenticationBtn from "../AuthenticationBtn";
import { useAuth0 } from "@auth0/auth0-react";

function Nav() {

    useEffect(() => {
        let sidenav = document.querySelector('#nav-mobile');
        M.Sidenav.init(sidenav, {});
    }, []);

    const { isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="black" role="navigation">
                        <div className="nav-wrapper container">
                        <a id="logo-container" className="brand-logo">Stock Tracker</a>
                        <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li><Link to="/current">Current Stocks</Link></li>
                                <li><Link to="/interested">Interested Stocks</Link></li>
                                <li><AuthenticationBtn /></li>
                            </ul>
                        </div>
                    </nav>
                </div>
    
                <ul id="nav-mobile" className="right sidenav">
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/current">Current Stocks</Link></li>
                    <li><Link to="/interested">Interested Stocks</Link></li>
                    <li><AuthenticationBtn /></li>
                </ul>
            </div>
        );
    }

    return (
        <div>
            <div className="navbar-fixed">
                <nav className="black" role="navigation">
                    <div className="nav-wrapper container">
                    <a id="logo-container" className="brand-logo">Stock Tracker</a>
                    <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><AuthenticationBtn /></li>
                        </ul>
                    </div>
                </nav>
            </div>

            <ul id="nav-mobile" className="right sidenav">
                <li><AuthenticationBtn /></li>
            </ul>
        </div>
    );

}

export default Nav;
