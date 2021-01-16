import { useAuth0 } from "@auth0/auth0-react";
import CurrentChoice from "../CurrentChoice";
import InterestedChoice from "../InterestedChoice";
import "./index.css";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
        <div>
            {/* <p>Welcome!</p> */}
            <img style={{float:"right"}} src={user.picture} alt={user.name} />
            <p><h5>Welcome back {user.nickname}!</h5></p>
            <p><h5>Keep track of your current stocks and stocks interested in<br />by visiting the links below!</h5></p>
            <p><h5>Happy investing!</h5></p>
            {/* <h4>{user.nickname}</h4> */}
            {/* <p>{user.email}</p> */}
            <br />
            <div className="row">
              <CurrentChoice />
              <InterestedChoice />
            </div>
        </div>
    )
  )
};

export default Profile;