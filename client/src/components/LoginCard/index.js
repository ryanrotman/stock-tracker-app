import "./index.css";
import AuthenticationBtn from "../AuthenticationBtn";

function LoginCard() {
    return (
        // TODO: might need to add back commented out row and col lines for proper mobile responsiveness
        // <div className="row">
            // <div className="col s12 m5">
            <div className="card-panel black center-align">
                <span className="white-text">This box here could also hold some text as well as the Log In / Sign Up button. My thought is that this would be centered in the window with a background image covering the whole window.
                </span>
                <br />
                <br />
                <AuthenticationBtn />
            </div>
            // </div>
        // </div>
    )
}

export default LoginCard;