import { useAuth0 } from "@auth0/auth0-react";
import "./index.css";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
        <div>
            <p>User profile and dashboard will be linked here. The user object provided by Auth0 has a specific ID which is what will be tied to the material saved on the database. This is also the page the user gets redirected to upon login to the page.</p>
            <img src={user.picture} alt={user.name} />
            <h4>{user.nickname}</h4>
            <p>{user.email}</p>
        </div>
    )
  )
};

export default Profile;