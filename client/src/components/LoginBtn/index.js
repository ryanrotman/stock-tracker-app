import { useAuth0 } from "@auth0/auth0-react";

const LoginBtn = () => {
  const { loginWithRedirect } = useAuth0();

  return ( 
    <button className="waves-effect waves-light btn" onClick={() => loginWithRedirect()}>
      Log In / Sign Up
    </button>
  );
};

export default LoginBtn;