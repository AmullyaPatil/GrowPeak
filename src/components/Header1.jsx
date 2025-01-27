import React from 'react';
import '../styles/Header1.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">Startopia</div>
      <nav className="header-nav">
        <a href="#/">Home</a>
        <a href="#/forum">Community</a>
        <a href="#mentors">Mentors</a>
        <a href="#events">Become a Mentor</a>
        {/* <a href="#help">Help Center</a> */}
      </nav>
      {/* <button className="header-signin">Sign In</button> */}
      <div className="header-user-icon1">User</div>
    </header>
  );
};

export default Header;
