import React, { useEffect, useState } from "react";
import Logo from "../../PostVedio/Asset/SVG/dreampotential_Logo-01.svg";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [authTrue, setAuthTrue] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('Token');
    if (token !== null) {
      setAuthTrue(true)
    } else {
      setAuthTrue(false)
    }
  }, [Home]);

  const userLogOut = () => {
    setAuthTrue(false)
    localStorage.removeItem("Token");
    navigate("/");
  };

  return (
    <div className="home">
      <div className="left">
        <div className="nav">
          <div className="logo">
            <img src={Logo} alt="Logo" width={250} height={100} />
          </div>
          {authTrue && <button type="button" onClick={userLogOut}>Logout</button>}
        </div>
        <div className="left-content">
          <h1>Help me debug</h1>
          <p>to my code and make it more efficient. </p>
        </div>
      </div>
      <div className="right">
        {authTrue ?
          <div className="auth-section">
            <h3>Get Started</h3>
            <div className="link-container">
              <Link to='/chatai'>Chat Ai</Link>
              <Link to='/postVideo'>Post Video</Link>
            </div>
          </div>
          :
          <div className="auth-section">
            <h3>Get Started</h3>
            <div className="link-container">
              <Link to='/login'>Log in</Link>
              <Link to='/signup'>Sign up</Link>
            </div>
          </div>

        }
        <div className="termService">
          <p>Dream Potential</p>
          <div className="services">
            <p>Terms of use</p>
            <span />
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
