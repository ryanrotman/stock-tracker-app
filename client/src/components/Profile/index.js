import { useAuth0 } from "@auth0/auth0-react";
import CurrentChoice from "../CurrentChoice";
import InterestedChoice from "../InterestedChoice";
import "./index.css";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
        <div>
            <div className="row">
              <div className="col s8 m9">
                <p><h5>Welcome back {user.nickname}!</h5></p>
                <p><h5>Keep track of your current stocks and stocks interested in by visiting the links below!</h5></p>
                <p><h5>Happy investing!</h5></p>
              </div>
              <div className="col s4 m3">
                <img style={{float:"right"}} src={user.picture} alt={user.name} />
              </div>
            </div>
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