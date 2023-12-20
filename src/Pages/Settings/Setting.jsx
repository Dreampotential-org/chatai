import React, { useState } from "react";
import "./Setting.css";
import { IoIosLogOut } from "react-icons/io";
import { HiExternalLink } from "react-icons/hi";
import { RxExternalLink } from "react-icons/rx";
import Logo from "../../PostVideo/Asset/SVG/dreampotential_Logo-01.svg";
import { Link, useNavigate } from "react-router-dom";

const Setting = () => {
  const [state, setState] = useState({
    general: true,
    security: false,
    subscription: false,
  });
  const navigate = useNavigate();

  const userLogOut = () => {
    localStorage.removeItem("Token");
    navigate("/");
  };
  const UserDetails = {
    name: "Saurabh Singh Chuahan",
    email: "ssc103445@gmail.com",
    pNumber: 8840279864,
  };

  const updateState = (prop) => {
    setState({
      general: prop === "General" && true,
      security: prop === "Security" && true,
      subscription: prop === "Subscription" && true,
    });
  };

  return (
    <div className="setting">
      <div className="row_1 flex__col">
        <div className="row_1_top flex__col">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <ul className="flex__col">
            <li
              className={state.general === true && "liActive"}
              onClick={() => updateState("General")}
            >
              General
            </li>
            <li
              className={state.security === true && "liActive"}
              onClick={() => updateState("Security")}
            >
              Security
            </li>
            <li
              className={state.subscription === true && "liActive"}
              onClick={() => updateState("Subscription")}
            >
              Subscription
            </li>
          </ul>
        </div>
        <button type="button">
          <IoIosLogOut fontSize={30} color="#e53e3e" onClick={userLogOut} />
        </button>
      </div>
      <div className="row_2">
        {state.general && (
          <div className="general flex__col flex__start">
            <div className="info flex__col flex__start">
              <span>Full name</span>
              <div className="info__input">
                <p>{UserDetails.name}</p>
              </div>
            </div>
            <div className="info flex__col flex__start">
              <span>Email Address</span>
              <div className="info__input">
                <p>{UserDetails.email}</p>
              </div>
            </div>
            <div className="info flex__col flex__start">
              <span>Phone Number</span>
              <div className="info__input">
                <p>{UserDetails.pNumber}</p>
              </div>
            </div>
          </div>
        )}
        {state.security && (
          <div className="security flex__col flex__start">
            <div className="info flex__col flex__start">
              <span>Current Password</span>
              <div className="info__input">
                <input
                  type="text"
                  name="cpass"
                  placeholder="Enter your current password"
                />
              </div>
            </div>
            <div className="info flex__col flex__start">
              <span>New Password</span>
              <div className="info__input">
                <input
                  type="text"
                  name="newpass"
                  placeholder="Enter new password"
                />
              </div>
            </div>
            <div className="info flex__col flex__start">
              <span>Confirm New Password</span>
              <div className="info__input">
                <input
                  type="text"
                  name="cnewpass"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="info flex__col flex__Center">
              <button>Change Password</button>
            </div>
          </div>
        )}
        {state.subscription && (
          <div className="Subscription flex__col flex__start">
            <h1>Hello Saurabh</h1>
            <div className="subs_details flex__row flex__start">
              <p>Expiry Date :</p>
              <span> 5-1-2024</span>
            </div>
            <Link to="/payment" className="sub_payment flex__row">
              <span>Renew Subscription</span>
              <RxExternalLink
                color="var(--chakra-colors-linkedin-700)"
                fontSize={19}
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Setting;
