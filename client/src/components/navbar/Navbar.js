import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const { user,dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = async (e) => {
    e.preventDefault();
    dispatch({ type:"LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">BookingNow</span>
        </Link>
        {user ? (
          <div className="loginState">
            <div>{user.username}</div>
            <div>
              <button className="navButton" onClick={handleLogOut}>
                Log out
              </button>
            </div>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button
              className="navButton"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
