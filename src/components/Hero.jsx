import React from "react";
import "../styles/Hero.css";
import user from "../Assets/imag.png";
import hero from "../Assets/hero.png";

const Hero = () => {
  return (
    <div className="homepage-container">
      <main className="main-content">
        <div className="content-wrapper">
          <div className="text-section">
            <h2 className="headline">GrowPeak</h2>
            <h2 className="headline1">Where <span style={{color:'#6a0dad'}}>Startups</span> Grow Together.</h2>
            <p className="description">
              Join our vibrant community of entrepreneurs, innovators, and experts. Share knowledge,
              get support, and collaborate on your startup journey.
            </p>
            <div className="button-group">
            <a href="#/forum" style={{textDecoration:'none'}}>
              <button className="primary-button">
                Join Discussion <span className="arrow">→</span>
              </button>
              </a>
              <button className="secondary-button">
                Browse Topics <span className="icon">🔍</span>
              </button>
            </div>
            <div className="member-info">
              <div className="member-images">
                <img src={user} alt="Member 1" className="member-image" />
                <img src={user} alt="Member 2" className="member-image" />
                <img src={user} alt="Member 3" className="member-image" />
              </div>
              <p className="member-text">Join 10,000+ members</p>
            </div>
          </div>
          <div className="image-section">
            <img src={hero} alt="Illustration" className="main-image" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
