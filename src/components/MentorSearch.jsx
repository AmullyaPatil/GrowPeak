import React, { useState } from "react";
import "../styles/MentorSearch.css";

const MentorSearch = () => {
  const [expertise, setExpertise] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("All");
  const [experience, setExperience] = useState("All");
  const [availability, setAvailability] = useState("All");

  // Track the currently selected mentor
  // const [selectedMentor, setSelectedMentor] = useState(null);

  const mentorData = [
    {
      id: 1,
      name: "Jungkook",
      title: "UX/UI Designer",
      location: "Pune",
      experience: "2+ years",
      industry: "Design",
      available: "Evenings",
      tags: ["Figma", "User Experience", "Wireframing"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3RMhABH6YofnEc80jmBFtwQCeSnBQjY-3yl8N_MSQPdwYBMqm7-xCp2K1RL3vfW0j7U&usqp=CAU",
    },
    {
      id: 2,
      name: "Tae",
      title: "Developer",
      location: "Mumbai",
      experience: "3+ years",
      industry: "Tech",
      available: "Weekends",
      tags: ["Agile", "Leadership", "Product Strategy"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUEcdBMueglZH8BCFGPiUpL5qW0Q87ilqmzZOkYpEwGRmqw9QG9DCjHVJIUVr2vFSu4U&usqp=CAU",
    },
    {
      id: 3,
      name: "Jimin",
      title: "Data Scientist",
      location: "Delhi",
      experience: "3+ years",
      industry: "Marketing",
      available: "Evenings",
      tags: ["Python", "Machine Learning", "Deep Learning"],
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSaqrc4O5lXdlDA5WvMxLl8fh0HLTCuFc0M6obMRXVZqFTSCd5cB4YqIfBitkUYDfjvP0&usqp=CAU",
      },

    {
      id: 4,
      name: "Kavya",
      title: "Marketing Specialist",
      location: "Chennai",
      experience: "2+ years",
      industry: "Marketing",
      available: "Weekdays",
      tags: ["Digital Marketing", "SEO", "Content Strategy"],
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHslrYMtEB6b2VS64UMyDzI0eT5VF0xPUutr7JIb5HdIfowZgpqA0hlP0HijlSTd-mpu8&usqp=CAU",
    },
    {
      id: 5,
      name: "J-Hope",
      title: "Business Consultant",
      location: "Hyderabad",
      experience: "1+ years",
      industry: "Marketing",
      available: "Weekends",
      tags: ["Strategy", "Operations", "Business Growth"],
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2flwnVK2Xd_XAI2hZcDb2kGgr7nZi-nS_35RT8fpdGs-g8qtMPfnw1KjRcj4qUKyKFM&usqp=CAU",
    },
    {
      id: 6,
      name: "Jin",
      title: "Full Stack Developer",
      location: "Bangalore",
      experience: "6+ years",
      industry: "Tech",
      available: "Weekdays",
      tags: ["React", "Node.js", "MongoDB"],
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdr2mzsevg_xALJKyvh8DSYJjVmiaYu3yxXGBReFHu1QUW9hHETvEI1XD62SYBK4uSeww&usqp=CAU",
      },
    {
      id: 7,
      name: "Suga",
      title: "Content Writer",
      location: "Delhi",
      experience: "3+ years",
      industry: "Tech",
      available: "Evenings",
      tags: ["Blogging", "SEO Writing", "Copywriting"],
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0160XxXwQToKDcNLlNSggxvpZs6SbYtCMQdVf91ok1tzPC3eT9nwEzR85-zvF4qnm-k&usqp=CAU",
    },
  ];
  const [selectedMentor, setSelectedMentor] = useState(mentorData[0]);

  const filteredMentors = mentorData.filter((mentor) => {
    const matchesExpertise = expertise
      ? mentor.title.toLowerCase().includes(expertise.toLowerCase())
      : true;
    const matchesLocation = location
      ? mentor.location.toLowerCase().includes(location.toLowerCase())
      : true;
    const matchesIndustry = industry !== "All" ? mentor.industry === industry : true;
    const matchesExperience =
      experience !== "All" ? mentor.experience.includes(experience) : true;
    const matchesAvailability =
      availability !== "All" ? mentor.available === availability : true;

    return (
      matchesExpertise &&
      matchesLocation &&
      matchesIndustry &&
      matchesExperience &&
      matchesAvailability
    );
  });

  const handleMentorClick = (mentor) => {
    setSelectedMentor(mentor);
  };

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
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
            placeholder="Search by expertise"
            className="filter-input"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="filter-input"
          />
          <button className="apply-button">Apply</button>
        </div>
        <div className="filter-options">
          <select
            className="filter-dropdown"
            onChange={(e) => setIndustry(e.target.value)}
            value={industry}
          >
            <option value="All">Industry</option>
            <option value="Tech">Tech</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
          </select>
          <select
            className="filter-dropdown"
            onChange={(e) => setExperience(e.target.value)}
            value={experience}
          >
            <option value="All">Experience Level</option>
            <option value="1+ years">1+ years</option>
            <option value="2+ years">2+ years</option>
            <option value="3+ years">3+ years</option>
          </select>
          <select
            className="filter-dropdown"
            onChange={(e) => setAvailability(e.target.value)}
            value={availability}
          >
            <option value="All">Availability</option>
            <option value="Weekdays">Weekdays</option>
            <option value="Weekends">Weekends</option>
            <option value="Evenings">Evenings</option>
          </select>
        </div>
      </div>

      <div className="mentor-results-section">
        {/* Left-side Mentor List */}
        <div className="mentor-list">
          {filteredMentors.map((mentor) => (
            <div
              className={`mentor-card ${
                selectedMentor?.id === mentor.id ? "selected" : ""
              }`}
              key={mentor.id}
              onClick={() => handleMentorClick(mentor)}
            >
              <img
                src={mentor.image}
                alt={`${mentor.name}'s profile`}
                className="mentor-image-placeholder"
              />
              <div className="mentor-details">
                <h2 className="mentor-name">{mentor.name}</h2>
                <p className="mentor-title">{mentor.title}</p>
                <p className="mentor-info">{mentor.location}</p>
                <p className="mentor-info">{mentor.experience}</p>
              </div>
              <div className="bookmark-icon">🔖</div>
            </div>
          ))}
        </div>

        {/* Right-side Selected Mentor Profile */}
        <div className="mentor-profile-highlight">
          <img
            src={selectedMentor.image}
            alt={`${selectedMentor.name}'s profile`}
            className="profile-image-large"
          />
          <div className="profile-details">
            <h2 className="profile-name">{selectedMentor.name}</h2>
            <p className="profile-title">{selectedMentor.title}</p>
            <p className="profile-info">Location: {selectedMentor.location}</p>
            <p className="profile-info">Experience: {selectedMentor.experience}</p>
            <p className="profile-info">Tags: {selectedMentor.tags.join(", ")}</p>
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