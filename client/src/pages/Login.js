import LoginCard from "../components/LoginCard";
import backgroundImg from "../assets/images/Stock-Trading.png"

function Login() {
    return (
        <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundRepeat: "no-repeat", height: "100%", backgroundPosition: "center", backgroundSize: "cover" }}>
            <div className="container login-container valign-wrapper">
                <LoginCard />
            </div>
        </div>
    )
}

export default Login;