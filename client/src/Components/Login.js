import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    console.log("Login button has been clicked!");
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => handleLogin(user));
      }
    });
  }

  return (
    <div className="signinPage">
      <div className="signContainerL">
        <div className="stack"></div>
        <br />
        <form id="loginForm" onSubmit={handleSubmit}>
          <p>USERNAME</p>
          <input
            className="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
          <p>PASSWORD</p>
          <input
            className="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <h5 className="forgot">forgot password?</h5>
          <button onClick={handleClick} className="signInL" type="submit">
            SIGN IN
          </button>
        </form>

        <Link to="/SignUp" className="signMessage">
          <h5>Don't have an account yet? Sign up.</h5>
        </Link>
      </div>
      <div id="sisiL">
        <a href="https://sisiyuart.com/">
          <p>Art by Sisi Yu</p>
        </a>
      </div>
    </div>
  );
}

export default Login;
