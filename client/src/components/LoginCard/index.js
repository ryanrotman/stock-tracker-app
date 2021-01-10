import "./index.css";
import LoginBtn from "../LoginBtn";

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
                <LoginBtn />
            </div>
            // </div>
        // </div>
    )
}

export default LoginCard;