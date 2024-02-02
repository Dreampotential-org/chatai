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
  const [valuesregi, setValuesregi] = useState({
    email: "",
    password: "",
  });

  const [errorCreate, setErrorCreate] = useState<ErrorState>({
    email: "",
    password: "",
  });

  const [createError, setCreateError] = useState({ error: "" });

  const onChangeregi = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValuesregi((valuesregi) => ({
      ...valuesregi,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const updatedErrors: ErrorState = {
    //   email: !valuesregi.email ? "Email address is required" : "",
    //   password: !valuesregi.password ? "Password is required" : "",
    // };
    // setErrorCreate(updatedErrors);

    // if (!updatedErrors.email && !updatedErrors.password) {
    // Proceed with login logic here
    const payload = {
      email: valuesregi.email,
      password: valuesregi.password,
    };

    logInApi(payload)
      .then((res) => {
        if (res?.status === 200) {
          console.log("LogIn Successfully!");
          setValuesregi({
            email: "",
            password: "",
          });
          navigate("/");
        }
      })
      .catch((err) => {
        console.error(err);

        setCreateError({ error: err.msg });
      });
    // }
  };

  return (
    <div className="authpage">
      <div className="login content">
        <div className="heading">
          <h1>Welcome Back</h1>
          <p>{createError.error}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              value={valuesregi.email}
              onChange={onChangeregi}
              required
            />
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
          </div>
          <button className="Btn" type="submit">
            Submit
          </button>
        </form>
        <div className="linkpage flex__col">
          <button type="button" onClick={() => navigate("/forget-password")}>
            Forget Password
          </button>
          <button type="button" onClick={() => navigate("/signup")}>
            Register?
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
