import React from "react";
import "../styles/Categories.css";

const Categories = () => {
  const categories = [
    {
      icon: "💰",
      title: "Funding",
      description: "Discuss fundraising, investment strategies, and financial planning for startups.",
      threads: "245 threads",
      members: "1.2k members",
    },
    {
      icon: "📈",
      title: "Scaling",
      description: "Share experiences and strategies about growing your startup successfully.",
      threads: "189 threads",
      members: "956 members",
    },
    {
      icon: "📦",
      title: "Product Development",
      description: "Exchange ideas about product strategy, development, and management.",
      threads: "312 threads",
      members: "1.5k members",
    },
  ];

  return (
    <div className="categories-section">
      <h2 className="section-title">Explore Categories</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <span className="category-icon">{category.icon}</span>
            <h3 className="category-title">{category.title}</h3>
            <p className="category-description">{category.description}</p>
            <div className="category-footer">
              <span className="threads">{category.threads}</span>
              <span className="members">{category.members}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
