import React from "react";
import Logo from "../Asset/SVG/dreampotential_Logo-01.svg";
import { Link, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();

  const userLogOut = () => {
    localStorage.removeItem("Token");
    navigate("/");
  };
  return (
    <div className="navbar">
      <Link to="/postVideo" className="logo">
        <img src={Logo} alt="Logo" width={180} height={40} />
      </Link>
      <div className="nav-links">
        <Link to="/postVideo/analytics">Dashboard</Link>
        <Link to="/chatai">Chat Ai</Link>
        <Link to="/postVideo/viewVideo">Videos</Link>
        <IoIosLogOut color="var(--CTA)" fontSize={30} onClick={userLogOut} />
      </div>
    </div>
  );
};

export default Navbar;
