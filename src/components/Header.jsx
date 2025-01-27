import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div>
      <header className="header1">
        <h1 className="logo1">GrowPeak</h1>
        <nav className="nav1">
          <a href="#/" className="nav-link1">Home</a>
          <a href="#/mentors" className="nav-link1">Mentors</a>
          <a href="#/bementor" className="nav-link1">Be a Mentor</a>
        </nav>
        <div className="user-icon1">User</div>
      </header>
    </div>
  );
};

export default Header;
