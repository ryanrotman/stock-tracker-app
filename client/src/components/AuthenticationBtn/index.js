import LoginBtn from "../LoginBtn";
import LogoutBtn from "../LogoutBtn";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutBtn /> : <LoginBtn />;
};

export default AuthenticationButton;