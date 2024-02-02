import React, { useState } from "react";
import "./AuthPage.css";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [resetLink, setResetLink] = useState(false);
  const [valuesregi, setValuesregi] = useState({
    email: "",
    password: "",
    cpassword: "",
  });
  const [errorCreate, setErrorCreate] = useState({
    email: "",
    password: "",
  });

  const onChangeregi = (event) => {
    event.persist();
    setValuesregi((valuesregi) => ({
      ...valuesregi,
      [event.target.name]: event.target.value,
    }));
  };

  const resetPassword = (e) => {
    e.preventDefault();
    if (valuesregi.password === valuesregi.cpassword) {
    } else {
      setErrorCreate({
        password: "Password is not same, Please check it again!",
      });
    }
  };
  const checkValidCred = (e) => {
    e.preventDefault();
    setResetLink(true);
  };

  return (
    <div className="authpage">
      <div className="forget content">
        <div className="heading">
          <h1>Forget Password</h1>
        </div>
        {resetLink ? (
          <form onSubmit={resetPassword}>
            <div className="inputs">
              <input
                type="password"
                id="password"
                name="password"
                placeholder=" New password"
                value={valuesregi.password}
                onChange={onChangeregi}
                required
              />
            </div>
            <div className="inputs">
              <input
                type="text"
                id="cpassword"
                name="cpassword"
                placeholder="Confirm new password"
                value={valuesregi.cpassword}
                onChange={onChangeregi}
                required
              />
              <p id="passwordError">{errorCreate.password}</p>
            </div>
            <button className="Btn" type="submit">
              Submit
            </button>
          </form>
        ) : (
          <form onSubmit={checkValidCred}>
            <div className="inputs">
              <span>
                Enter your user account's verified email address and we will
                send you a password reset link.
              </span>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                value={valuesregi.email}
                onChange={onChangeregi}
                required
              />
              <p id="emailError">{errorCreate.email}</p>
            </div>
            <button className="Btn" type="submit">
              Send password reset link
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
