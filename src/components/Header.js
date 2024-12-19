import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">JobRinger</div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Jobs</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
