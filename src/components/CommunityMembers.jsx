import React from "react";
import "../styles/CommunityMembers.css";
import image1 from "../Assets/member1.png";
import image2 from "../Assets/member2.png";
import image3 from "../Assets/member3.png";

const members = [
  {
    name: "Growth Strategist",
    role: "A",
    image:image1,
  },
  {
    name: "Tech Enthusiast",
    role: "V.",
    image: image2,
  },
  {
    name: "Product Designer",
    role: "M",
    image: image3,
  },
];

const CommunityMembers = () => {
  return (
    <div className="community-members">
      <h2 className="community-section-title">Active Community Members</h2>
      <p className="community-subtitle">Meet the brightest minds in our community, collaborating to share insights and ideas.</p>
      <p className="community-subtitle">Connect, learn, and grow together!</p>
      <div className="community-members-grid">
        {members.map((member, index) => (
          <div
            key={index}
            className="community-member-card"
            style={{ backgroundImage: `url(${member.image})` }}
          >
            <div className="community-member-header">
              <h3>{member.name}</h3>
            </div>
            <div className="community-member-overlay">
              <p>{member.role}</p>
              <button className="community-button">Get in Touch</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityMembers;
