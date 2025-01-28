import React from "react";
import "../styles/BecomeMentor.css";
import benefits from "../Assets/mentorbenefits.png";

const BecomeMentor = () => {
  return (
    <div className="become-mentor-container">
      <div className="become-mentor-header">
        <h1>Become a Mentor</h1>
        <p>Share your knowledge, inspire others, and grow together.</p>
      </div>

      <section className="become-mentor-section">
        <div className="become-mentor-left">
          <div className="become-mentor-text">
            <h2>Why Mentor?</h2>
            <p>
              As a mentor, you have the opportunity to make a meaningful impact on someone's career and personal growth while refining your own skills.
            </p>
          </div>
          <div className="become-mentor-text">
            <h2>Benefits</h2>
            <ul>
              <li>Enhance your leadership abilities</li>
              <li>Expand your professional network</li>
              <li>Receive exclusive mentor rewards</li>
            </ul>
          </div>
        </div>
        <div className="become-mentor-image">
          <img src={benefits} alt="Why Mentor" />
        </div>
      </section>

      <section className="become-mentor-section get-started">
        <div className="become-mentor-image">
          <img src="https://via.placeholder.com/600x400" alt="Get Started" />
        </div>
        <div className="become-mentor-text">
          <h2>Get Started</h2>
          <p>Complete your mentor profile and start mentoring today.</p>
            <p> Your journey to inspire others begins here.</p>
          <button className="become-mentor-button">Sign Up as Mentor</button>
        </div>
      </section>

      <div className="become-mentor-footer">
        <p>
          Have questions? <a href="#">Contact our support team</a> for more information.
        </p>
      </div>
    </div>
  );
};

export default BecomeMentor;
