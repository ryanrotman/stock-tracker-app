import { useAuth0 } from "@auth0/auth0-react";

const LogoutBtn = () => {
  const { logout } = useAuth0();

  return (
    <button className="waves-effect waves-light btn" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogoutBtn;