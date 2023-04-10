import React, { useState } from "react";
import "./Login.scss";
/* Component that is the login page of the site*/

// eslint-disable-next-line react/prop-types
const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formComplete, setFormComplete] = useState(false);

  //function to manage the form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail(email)) {
      handleLogin();
    } else {
      setEmailError("Please enter a valid email address");
    }
  };

  //function to manage the email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
    if (e.target.value && password) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
  };

  //function to manage the password input
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value && email) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
  };

  //Checks if the email is valid
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="example@example.com"
          />
          {emailError && <div className="error">{emailError}</div>}
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit" disabled={!formComplete}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
