import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize";

import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

ReactDOM.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
  document.getElementById("root")
);

// ----- THIS SECTION SUPPOSEDLY NOT NEEDED WITH USING AUTH0PROVIDERWITHHISTORY -----

// import { Auth0Provider } from "@auth0/auth0-react";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

// ReactDOM.render(
//     <Auth0Provider
//         domain={domain}
//         clientId={clientId}
//         redirectUri="http://localhost:3000/dashboard"
//     >
//         <App />
//     </Auth0Provider>,
//     document.getElementById("root")
// );