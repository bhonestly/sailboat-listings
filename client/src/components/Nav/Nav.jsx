import "../../assets/css/components/Nav/Nav.css";
import { NavLink } from "react-router-dom";

const Nav = ({ user, handleLogout }) => {  

  return (
    <nav>
      <div className="nav-div">
        <div className="logo-holder">
          <NavLink to="/"><h2 className="logo">Sailboat Listings</h2></NavLink>
        </div>

        <div className="link-holder">
          <NavLink className="nav-link" to="/boats">Browse</NavLink>

          {user ? (<NavLink className="nav-link" to="/create-boat">Create</NavLink>) : 
          
          (<NavLink className="nav-link" to="/signup">Create</NavLink>)}

          {user ? (<div className="nav-link">Welcome {user.username}</div>) :
          
          (<NavLink className="nav-link" to="/signup">Sign Up</NavLink>)}

          {user ? (<NavLink className="nav-link" to="/" onClick={handleLogout}>Logout</NavLink>) : (<NavLink className="nav-link" to="/login">Login</NavLink>)}
        </div>
      </div>
    </nav>
  );
};
export default Nav;
