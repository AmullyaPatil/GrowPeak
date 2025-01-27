import React from "react";
import "../styles/CommunityMembers.css";
import user from "../Assets/image.png";

const CommunityMembers = () => {
  const members = [
    { name: "A", role: "Growth Strategist", image:user },
    { name: "V", role: "Founder & Tech Enthusiast", image:user },
    { name: "M", role: "Product Designer", image:user },
    { name: "C", role: "Marketing Expert", image:user },
  ];

  return (
    <div className="community-members">
      <h2 className="community-section-title">Active Community Members</h2>
      <div className="community-members-grid">
        {members.map((member, index) => (
          <div className="community-member-card" key={index}>
            <img src={member.image} alt={member.name} className="comm-member-image" />
            <h3 className="community-member-name">{member.name}</h3>
            <p className="community-member-role">{member.role}</p>
            <div className="community-social-icons">
              <a href="#" className="community-icon">𝕩</a>
              <a href="#" className="community-icon">✉️</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityMembers;
