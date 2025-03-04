import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("You have logged out!");
    navigate("/");
  };

  return (
    <div className="page-container">
      <h2>Logout</h2>
      <button onClick={handleLogout}>Confirm Logout</button>
    </div>
  );
};

export default Logout;
