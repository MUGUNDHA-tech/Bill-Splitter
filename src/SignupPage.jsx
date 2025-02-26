import React from "react";
import "./SignupPage.css";

const SignupPage = ({ onSignupComplete }) => {
  return (
    <div className="login-container">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Enter a username" />
      <input type="password" placeholder="Enter a password" />
      <button onClick={onSignupComplete}>Sign Up</button>
    </div>
  );
};

export default SignupPage;
