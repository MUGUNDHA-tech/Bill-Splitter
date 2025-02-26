import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = ({ onLogin, onSignup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "Mugundha2006" && password === "mnbs@2001") {
      onLogin();
    } else {
      alert("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>New user? <span className="signup-link" onClick={onSignup}>Sign Up</span></p>
    </div>
  );
};

export default LoginPage;
