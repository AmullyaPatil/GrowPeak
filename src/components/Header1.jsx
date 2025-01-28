import React, { useState, useEffect } from "react";
import "../styles/Header1.css";
import AuthPage from "./AuthForm";

const Header1 = () => {
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(null);
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    setActivePage(window.location.hash);
    const handleHashChange = () => setActivePage(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleAuthSuccess = (profileImage) => {
    setUserLoggedIn(profileImage);
    setShowAuthForm(false);
  };

  return (
    <>
      <header className="header">
        <a href="#/" className={`header-logo ${activePage === "#/" ? "active" : ""}`}>GrowPeak</a>
        <nav className="header-nav">
          <a href="#/" className={activePage === "#/" ? "active" : ""}>Home</a>
          <a href="#/forum" className={activePage === "#/forum" ? "active" : ""}>Community</a>
          <a href="#mentors" className={activePage === "#mentors" ? "active" : ""}>Mentors</a>
          <a href="#become-mentor" className={activePage === "#become-mentor" ? "active" : ""}>Become a Mentor</a>
        </nav>

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
