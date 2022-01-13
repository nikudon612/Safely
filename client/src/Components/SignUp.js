import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp({ setUser }) {
  const [full_name, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name,
        email,
        phone_number,
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div className="signContainer">
      <form className="signupFORM" onSubmit={handleSubmit}>
        <p>NAME</p>
        <input
          className="fullName"
          type="text"
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
        />

        <p>EMAIL</p>

        <input
          className="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="123@me.com"
        />
        <p>PHONE NUMBER</p>

        <input
          className="phoneNumber"
          type="tel"
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="+(000)-000-0000"
        />
        <p>USERNAME</p>

        <input
          className="usernameSU"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <p>PASSWORD</p>

        <input
          className="passwordSU"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <p>PASSWORD CONFIRMATION</p>

        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
          placeholder="password"
        />

        <div id="PasswordReq">
          <p>Password requirements</p>
          <ul>
            <li>Must be a minimum of 8 characters.</li>
            <li>Must contain letters, numbers, and symbols.</li>
            <li>Passwords must match.</li>
          </ul>
        </div>
        <button type="submit" className="signUP">
          SIGN UP
        </button>
        <Link to="/login">
          <h5 className="closeButton">Already have an Account? Login here.</h5>
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
