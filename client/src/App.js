import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Current from "./pages/Current";
import Interested from "./pages/Interested";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Loading from "./components/Loading";
import ProtectedRoute from "./auth/protected-route";
import Footer from "./components/Footer";
import './App.css';

function App() {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <Loading />;
    }

    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                <ProtectedRoute exact path="/current" component={Current} />
                <ProtectedRoute exact path="/interested" component={Interested} />
                <Route>
                    <NoMatch />
                </Route>
            </Switch>
            <footer>
                <Footer />
            </footer>
        </Router>
    );
}

export default App;
