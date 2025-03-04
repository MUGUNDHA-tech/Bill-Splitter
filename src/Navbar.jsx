import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Bill Splitter</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
