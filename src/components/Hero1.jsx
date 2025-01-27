import React from "react";
import "../styles/Hero1.css";

const Hero = () => {
  return (
    <div className="homepage-container">
      <main className="main-content">
        <div className="content-wrapper">
          <div className="text-section">
            <h2 className="headline">
            <p className="typing-line">CONNECT.</p>
              <p className="typing-line">LEARN.</p>
              <p className="typing-line">GROW.</p>
            </h2>
            <p className="description">Find your perfect mentor and unlock your potential today!</p>
            <p className="sub-description">Get started in minutes.</p>
            <form className="search-home">
              <input type="text" placeholder="Enter Expertize" className="home-expertize" />
              <button type="submit" className="search-button">Get Started</button>
            </form>
          </div>
          <div className="image-section">
            <img src="placeholder-image.jpg" alt="Illustration" className="main-image" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;