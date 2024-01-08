import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logInApi } from "../../ChatAi/services/helper";
import "./AuthPage.css";

interface ErrorState {
  email: string;
  password: string;
}

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const [authSection, setAuthSection] = useState(false);
  const [valuesregi, setValuesregi] = useState({
    email: "",
    password: "",
  });

  const [errorCreate, setErrorCreate] = useState<ErrorState>({
    email: "",
    password: "",
  });

  const onChangeregi = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValuesregi((valuesregi) => ({
      ...valuesregi,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedErrors: ErrorState = {
      email: !valuesregi.email ? "Email address is required" : "",
      password: !valuesregi.password ? "Password is required" : "",
    };
    setErrorCreate(updatedErrors);

    if (!updatedErrors.email && !updatedErrors.password) {
      // Proceed with login logic here
      const payload = {
        email: valuesregi.email,
        password: valuesregi.password,
      };

      logInApi(payload)
        .then((res) => {
          // console.log('response ==>' + JSON.stringify(res));
          if (res?.status === 200) {
            console.log("LogIn Successfully!");
            setValuesregi({
              email: "",
              password: "",
            });
            navigate("/");
          } else {
            setErrorCreate(updatedErrors);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="auth" id="auth">
      <div className="authpage">
        <div className="content">
          <div className="login">
            <div className="heading">
              <h1>Welcome Back</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="inputs">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  value={valuesregi.email}
                  onChange={onChangeregi}
                  required
                />
                <p id="emailError">{errorCreate.email}</p>
              </div>
              <div className="inputs">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={valuesregi.password}
                  onChange={onChangeregi}
                  required
                />
                <p id="passwordError">{errorCreate.password}</p>
              </div>
              <button className="Btn" type="submit">
                Submit
              </button>
            </form>
            <div className="linkpage">
              <button type="button" onClick={() => navigate("/signup")}>
                Register?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
