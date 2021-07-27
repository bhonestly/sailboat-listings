// import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Nav = ({ user, handleLogout }) => {
  const [menu, setMenu] = useState('closed');
  const handleChange = () => {
    if (menu === 'closed') {
      setMenu('open');
    } else {
      setMenu('closed');
    }
  }

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
