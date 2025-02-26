import React from "react";
import "./WelcomePage.css";

const WelcomePage = ({ onStart }) => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">WELCOME TO BILL SPLITTER APP</h1>
      <p className="welcome-text">Effortlessly split bills with friends and family.</p>
      <button className="start-button" onClick={onStart}>Start</button>
    </div>
  );
};

export default WelcomePage;
