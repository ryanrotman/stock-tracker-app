import "./index.css";
import AuthenticationBtn from "../AuthenticationBtn";

function LoginCard() {
    return (
        <div className="row">
            <div className="col s6 offset-s3 valign">
            <div className="card-panel black center-align" style={{ boxShadow: "0 4px 8px 0 rgba(245, 245, 245, 0.2), 0 6px 20px 0 rgba(245, 245, 245, 0.19)" }}>
                <span className="white-text">
                    Welcome to your stock investment tracker!
                    <p>Please click below to either login to your account or sign up for one!</p>
                </span>
                <AuthenticationBtn />
                <br />
            </div>
            </div>
        </div>
    )
}

export default LoginCard;