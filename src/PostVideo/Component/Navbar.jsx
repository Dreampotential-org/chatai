import React from "react";
import Logo from "../Asset/SVG/dreampotential_Logo-01.svg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const userLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="navbar">
      <Link to="/postVideo" className="logo">
        <img src={Logo} alt="Logo" width={180} height={40} />
      </Link>
      <div className="nav-links">
        <Link to="/postVideo/analytics">Analytics</Link>
        <Link to="/chatai">Chat Ai</Link>
        <Link to="/postVideo/viewVideo">Dashboard</Link>
        <button type="button" className="post-btn" onClick={userLogOut}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
