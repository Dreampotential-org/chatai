import React, { useState } from "react";
import Logo from "../Asset/SVG/dreampotential_Logo-01.svg";
import { Link, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import "../../Email/Pages/Home/Home.css";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [hamburgerMenu, sethamburgerMenu] = useState(false);
  const navigate = useNavigate();

  const userLogOut = () => {
    localStorage.removeItem("Token");
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="flex__row flex__center navLeft">
        <Link to="/" className="nav-logo">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="flex__row flex__center nav_dropDown">
        <div
          className={`flex__row flex__center ${
            hamburgerMenu ? "nav_Show" : "nav_Hide"
          }`}
          style={{ gap: "1rem" }}
        >
          <Link to="/postVideo/analytics">Dashboard</Link>
          <Link to="/chatai">Chat Ai</Link>
          <Link to="/postVideo/viewVideo">Videos</Link>
        </div>
        <IoIosLogOut color="#FFF" fontSize={30} onClick={userLogOut} />
        <div className="hamBtn">
          {hamburgerMenu ? (
            <RxCross1
              fontSize={24}
              onClick={() => sethamburgerMenu(!hamburgerMenu)}
            />
          ) : (
            <FaBars
              fontSize={24}
              onClick={() => sethamburgerMenu(!hamburgerMenu)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
