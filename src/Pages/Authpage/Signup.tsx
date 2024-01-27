import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logInApi, signUPApi } from "../../ChatAi/services/helper";
import "./AuthPage.css";

interface ErrorState {
  email: string;
  password: string;
}

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const [createError, setCreateError] = useState({ error: "" });
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredential({ ...credential, [name]: value });
    setCreateError({ error: "" });
  };

  const creatSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    let errorCreate = validateregi(credential);

    if (Object.keys(errorCreate).length === 0) {
      const payload = {
        name: credential.name,
        email: credential.email,
        password: credential.password,
      };

      signUPApi(payload)
        .then((res: any) => {
          if (res?.status === 200) {
            console.log("Sign Up Successful!");
            setCredential({
              name: "",
              email: "",
              password: "",
            });
            navigate("/");
          }
        })
        .catch((err: any) => {
          console.error(err.msg);
          setCreateError({ error: err.msg });
        });
    }
  };

  function validateregi(valuesregi: object) {
    let errorCreate = {};
    return errorCreate;
  }

  useEffect(() => {});

  return (
    <>
      <div className="auth" id="auth">
        <div className="authpage">
          <div className="content">
            <div className="signup">
              <div className="heading">
                <h1>SignUp</h1>
              </div>
              <form onSubmit={creatSubmit}>
                <div className="inputs">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={credential.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="inputs">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={credential.email}
                    onChange={handleChange}
                    required
                  />
                  <p id="newUserNameError">{createError.error}</p>
                </div>
                <div className="inputs">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={credential.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button className="Btn" type="submit">
                  Register
                </button>
              </form>
              <div className="linkpage">
                <button type="button" onClick={() => navigate("/login")}>
                  Have an account?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
