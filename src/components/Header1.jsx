import React, { useState } from "react";
import "../styles/Header1.css";
import AuthPage from "./AuthForm";

const Header1 = () => {
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(null); // Store user profile image

  const handleAuthSuccess = (profileImage) => {
    setUserLoggedIn(profileImage); // Store profile image URL
    setShowAuthForm(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-logo">Startopia</div>
        <nav className="header-nav">
          <a href="#/">Home</a>
          <a href="#/forum">Community</a>
          <a href="#mentors">Mentors</a>
          <a href="#events">Become a Mentor</a>
        </nav>

        {/* Display the profile image in the header if logged in */}
        {userLoggedIn ? (
          <button className="header-profile">
            <img src={userLoggedIn} alt="Profile" className="profile-image" />
          </button>
        ) : (
          <button onClick={() => setShowAuthForm(true)} className="header-signin">
            Sign In
          </button>
        )}
      </header>

      {/* Render AuthPage with onAuthSuccess prop */}
      {showAuthForm && <AuthPage onAuthSuccess={handleAuthSuccess} />}
    </>
  );
};

export default Header1;
