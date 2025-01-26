import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <h1 className="logo">GrowPeak</h1>
        <nav className="nav">
          <a href="#/" className="nav-link">Home</a>
          <a href="#/mentors" className="nav-link">Mentors</a>
          <a href="#/bementor" className="nav-link">Be a Mentor</a>
        </nav>
        <div className="user-icon">User</div>
      </header>
    </div>
  );
};

export default Header;
