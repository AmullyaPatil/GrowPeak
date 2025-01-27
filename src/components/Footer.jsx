import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h3 className="footer-logo">GrowPeak</h3>
          <p className="footer-description">
            Empowering communities to connect, learn, and grow together.
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#/">Home</a>
            </li>
            <li>
              <a href="#/forum">Community</a>
            </li>
            <li>
              <a href="#mentors">Mentors</a>
            </li>
            <li>
              <a href="#events">Become a Mentor</a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="footer-copyright">
            © 2025 GrowPeak. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
