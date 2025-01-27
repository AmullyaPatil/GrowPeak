import React from "react";
import "../styles/FeaturedTopics.css";

const FeaturedTopics = () => {
  const topics = [
    {
      type: "Trending Discussion",
      title: "Scaling Your SaaS: Best Practices",
      description: "Join the conversation about effective strategies for scaling your SaaS business.",
      author: "Sarah Chen",
      time: "2h ago",
      icon: "🔥",
    },
    {
      type: "Resource",
      title: "Fundraising Guide 2025",
      description: "Complete guide to raising capital for your startup in 2025.",
      author: "Mike Johnson",
      time: "1d ago",
      icon: "📘",
    },
    {
      type: "Upcoming Event",
      title: "Startup Pitch Night",
      description: "Join us for an evening of innovative startup pitches and networking.",
      author: "Alex Rivera",
      date: "Mar 15",
      icon: "📅",
    },
  ];

  return (
    <div className="featured-topics">
      <h2 className="section-title">Featured Topics</h2>
      <div className="topics-grid">
        {topics.map((topic, index) => (
          <div className="topic-card" key={index}>
            <span className="topic-type">
              {topic.icon} {topic.type}
            </span>
            <h3 className="topic-title">{topic.title}</h3>
            <p className="topic-description">{topic.description}</p>
            <div className="topic-footer">
              <span className="author">{topic.author}</span>
              <span className="time">{topic.time || topic.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTopics;
