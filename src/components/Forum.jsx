import React from "react";
import "../styles/Forum.css";
import user from "../Assets/imag.png";

const DiscussionPage = () => {
  return (
    <div className="forum-discussion-page">
      {/* Left Sidebar */}
      <aside className="forum-left-sidebar">
        <button className="forum-new-thread-btn">New Thread</button>
        <ul className="forum-menu">
          <li>All Discussions</li>
          <li>Popular</li>
          <li>Funding</li>
          <li>Scaling</li>
          <li>Product Development</li>
          <li>Recent</li>
          <li>Bookmarked</li>
        </ul>
        <div className="forum-tags-section">
          <h4>Popular Tags</h4>
          <div className="forum-tags">
            <span>#startup</span>
            <span>#marketing</span>
            <span>#growth</span>
            <span>#funding</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="forum-main-content">
        <div className="forum-discussion-card">
          {/* Discussion Header */}
          <div className="forum-discussion-header">
            <img src={user} alt="Author" className="forum-author-image" />
            <div>
              <h3>How to effectively validate your startup idea?</h3>
              <p className="forum-meta-info">kim T • Posted 2 hours ago</p>
              <div className="forum-tags">
                <span>#validation</span>
                <span>#startup</span>
              </div>
            </div>
          </div>

          {/* Discussion Body */}
          <p className="forum-discussion-body">
            I'm working on a new startup idea but I'm not sure how to validate it properly. What are some effective
            methods you've used to validate your startup ideas before investing too much time and resources?
          </p>

          {/* Comments Section */}
          <div className="forum-comments">
            <div className="forum-comment">
              <p>
                <strong>Jungkook</strong> • 1 hour ago
              </p>
              <p>
                Have you considered doing customer interviews? That's usually the first step I recommend. Try to talk to
                at least 20 potential customers and really understand their pain points.
              </p>
              <div className="forum-comment-meta">
                <span>24 likes</span> • <button className="forum-reply-btn">Reply</button>
              </div>
            </div>
            <div className="forum-comment">
              <p>
                <strong>Jeon</strong> • 30 minutes ago
              </p>
              <p>
                I would suggest creating a landing page to test market interest. Use tools like Unbounce or Carrd, drive
                some traffic through ads, and measure conversion rates.
              </p>
              <div className="forum-comment-meta">
                <span>12 likes</span> • <button className="forum-reply-btn">Reply</button>
              </div>
            </div>
          </div>

          {/* Reply Section */}
          <div className="forum-reply-section">
            <textarea placeholder="Write your reply..." className="forum-reply-input"></textarea>
            <button className="forum-reply-btn">Post Reply</button>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="forum-right-sidebar">
        {/* Thread Statistics */}
        <div className="forum-card">
          <h4>Thread Statistics</h4>
          <p>Views: 1,234</p>
          <p>Replies: 23</p>
          <p>Created: 2 hours ago</p>
        </div>

        {/* Similar Threads */}
        <div className="forum-card">
          <h4>Similar Threads</h4>
          <ul>
            <li>
              Best practices for MVP development <span>15 replies • 2 days ago</span>
            </li>
            <li>
              Finding early adopters for B2B SaaS <span>8 replies • 3 days ago</span>
            </li>
            <li>
              How to price your startup product? <span>21 replies • 4 days ago</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default DiscussionPage;
