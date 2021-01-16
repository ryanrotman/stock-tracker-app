import "./index.css";
import AuthenticationBtn from "../AuthenticationBtn";

function LoginCard() {
    return (
        // TODO: might need to add back commented out row and col lines for proper mobile responsiveness
        <div className="row">
            <div className="col s6 offset-s3 valign">
            <div className="card-panel black center-align">
                <span className="white-text">
                    Welcome to your stock investment tracker!
                    {/* <p>Here you can keep track of stocks you are currently invested in as well as any that you are interested in.</p> */}
                    <p>Please click below to either login to your account or sign up for one!</p>
                </span>
                {/* <br />
                <br /> */}
                <AuthenticationBtn />
                <br />
            </div>
            </div>
        </div>
    )
}

export default LoginCard;