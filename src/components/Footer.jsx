import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <span className="footer-text">2025 GrowPeak. All Rights Reserved.</span>
        <div className="social-links">
          <a href="#" className="social-link">
            FB
          </a>
          <a href="#" className="social-link">
            IG
          </a>
          <a href="#" className="social-link">
            LN
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
