import React, { useEffect, useState } from "react";
import Logo from "../../PostVideo/Asset/SVG/dreampotential_Logo-01.svg";
import { Link, useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import "./Home.css";

const handleEpadClick = () => {
  // Use window.location to navigate to the specified URL
  window.location.href = "https://epad.dreampotential.org/";
};

const handleExCalidrawClick = () => {
  // Use window.location to navigate to the specified URL
  window.location.href = "https://wb.dreampotential.org/";
};

const Home = () => {
  const [authTrue, setAuthTrue] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token !== null) {
      setAuthTrue(true);
    } else {
      setAuthTrue(false);
    }
  }, [Home]);

  const userLogOut = () => {
    setAuthTrue(false);
    localStorage.removeItem("Token");
    navigate("/");
  };

  return (
    <div className="home">
      <div className="right">
        <div className="navbar navLeft">
          <div className="nav-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="setting-logout" style={{ gap: "1rem" }}>
            {authTrue && (
              <>
                <Link to="/settings">
                  <IoSettingsOutline color="#FFF" fontSize={32} />
                </Link>
                <IoIosLogOut color="#FFF" fontSize={32} onClick={userLogOut} />
              </>
            )}
          </div>
          {/* </div> */}
        </div>

        {authTrue ? (
          <div className="auth-section">
            <h3>Get Started</h3>
            <div className="link-container flex__row flex__center">
              <Link className="chatai" to="/chatai">
                Chat Ai
              </Link>
              <Link
                className="video"
                to="https://streamsphere.dreampotential.org/"
              >
                Video Streaming
              </Link>
              <Link className="postvideo" to="/postVideo">
                Post Video
              </Link>
              <Link className="mail" to="/mail">
                Mail
              </Link>
              <Link className="admin-panel" to="/admin-panel">
                Admin Panel
              </Link>
              <Link className="postvideo" to="/contacts">
                Contacts
              </Link>
              <Link className="chatai" to="/teacher-ui">
                Teacher-UI
              </Link>
              {/* <Link className="contacts" to="/contacts">Contacts</Link> */}
              <Link className="mail" to="" onClick={handleEpadClick}>
                Epad
              </Link>
              <Link className="chatai" to="" onClick={handleExCalidrawClick}>
                ExCalidraw
              </Link>
            </div>
          </div>
        ) : (
          <div className="auth-section">
            <h3>Get Started</h3>
            <div className="link-container">
              <Link to="/login">Log in</Link>
              <Link to="/signup">Sign up</Link>
            </div>
          </div>
        )}
        <div className="termService">
          <p>Dream Potential</p>
          <div className="flex__row flex__center link-container">
            <p>Terms of use</p>
            <span />
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
