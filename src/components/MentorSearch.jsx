import React from "react";
import "../styles/MentorSearch.css";

const MentorSearch = () => {
  return (
    <div className="mentor-search-container">
      <header className="search-header">
        <h1 className="search-title">Find Your Perfect Mentor</h1>
        <p className="search-subtitle">Search for mentors by expertise, location, or availability.</p>
      </header>

      <div className="search-section">
        <div className="search-inputs">
          <input
            type="text"
            placeholder="Search by expertise"
            className="filter-input"
          />
          <input
            type="text"
            placeholder="Location"
            className="filter-input"
          />
          <button className="apply-button">Apply</button>
        </div>
        <div className="filter-options">
          <select className="filter-dropdown">
            <option>Industry</option>
          </select>
          <select className="filter-dropdown">
            <option>Experience Level</option>
          </select>
          <select className="filter-dropdown">
            <option>Availability</option>
          </select>
          <select className="filter-dropdown">
            <option>Language</option>
          </select>
        </div>
      </div>

      <div className="mentor-results-section">
        <div className="mentor-list">
          <div className="mentor-card">
            <div className="mentor-image-placeholder"></div>
            <div className="mentor-details">
              <h2 className="mentor-name">Name</h2>
              <p className="mentor-title">Professional Title</p>
              <p className="mentor-info">Location</p>
              <p className="mentor-info">Experience</p>
            </div>
            <div className="bookmark-icon">🔖</div>
          </div>

          <div className="mentor-card">
            <div className="mentor-image-placeholder"></div>
            <div className="mentor-details">
              <h2 className="mentor-name">Name</h2>
              <p className="mentor-title">Professional Title</p>
              <p className="mentor-info">Location</p>
              <p className="mentor-info">Experience</p>
            </div>
            <div className="bookmark-icon">🔖</div>
          </div>

          <div className="mentor-card">
            <div className="mentor-image-placeholder"></div>
            <div className="mentor-details">
              <h2 className="mentor-name">Name</h2>
              <p className="mentor-title">Professional Title</p>
              <p className="mentor-info">Location</p>
              <p className="mentor-info">Experience</p>
            </div>
            <div className="bookmark-icon">🔖</div>
          </div>
        </div>

        <div className="mentor-profile-highlight">
          <div className="profile-image-placeholder"></div>
          <div className="profile-details">
            <h2 className="profile-name">Name</h2>
            <p className="profile-title">Professional Title</p>
            <p className="profile-info">Experience</p>
            <p className="profile-info">Tags</p>
            <p className="profile-info">About</p>
          </div>
          <div className="profile-actions">
            <p className="profile-rating">Rating</p>
            <button className="schedule-button">Schedule</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorSearch;
