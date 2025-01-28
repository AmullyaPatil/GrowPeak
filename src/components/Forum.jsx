import React, { useState } from "react";
import "../styles/Forum.css";
import user from "../Assets/imag.png";

const DiscussionPage = () => {
  // State for managing threads
  const [threads, setThreads] = useState([
    {
      id: 1,
      title: "How to effectively validate your startup idea?",
      author: "kim T",
      posted: "2 hours ago",
      tags: ["#validation", "#startup"],
      content:
        "I'm working on a new startup idea but I'm not sure how to validate it properly. What are some effective methods you've used to validate your startup ideas before investing too much time and resources?",
      comments: [
        {
          id: 1,
          author: "Jungkook",
          posted: "1 hour ago",
          content:
            "Have you considered doing customer interviews? That's usually the first step I recommend. Try to talk to at least 20 potential customers and really understand their pain points.",
          likes: 24,
        },
        {
          id: 2,
          author: "Jeon",
          posted: "30 minutes ago",
          content:
            "I would suggest creating a landing page to test market interest. Use tools like Unbounce or Carrd, drive some traffic through ads, and measure conversion rates.",
          likes: 12,
        },
      ],
    },
  ]);

  // State for managing new thread input
  const [newThreadTitle, setNewThreadTitle] = useState("");
  const [newThreadContent, setNewThreadContent] = useState("");
  const [showNewThreadModal, setShowNewThreadModal] = useState(false); // Controls modal visibility

  // State for managing new reply input
  const [newReplyContent, setNewReplyContent] = useState("");

  // Function to handle adding a new thread
  const handleAddThread = () => {
    if (newThreadTitle.trim() && newThreadContent.trim()) {
      const newThread = {
        id: threads.length + 1,
        title: newThreadTitle,
        author: "New User",
        posted: "Just now",
        tags: ["#new"],
        content: newThreadContent,
        comments: [],
      };
      setThreads([...threads, newThread]);
      setNewThreadTitle("");
      setNewThreadContent("");
      setShowNewThreadModal(false); // Close the modal after submission
    }
  };

  // Function to handle adding a new reply
  const handleAddReply = (threadId) => {
    if (newReplyContent.trim()) {
      const updatedThreads = threads.map((thread) => {
        if (thread.id === threadId) {
          const newComment = {
            id: thread.comments.length + 1,
            author: "New User",
            posted: "Just now",
            content: newReplyContent,
            likes: 0,
          };
          return { ...thread, comments: [...thread.comments, newComment] };
        }
        return thread;
      });
      setThreads(updatedThreads);
      setNewReplyContent("");
    }
  };

  return (
    <div className="forum-discussion-page">
      {/* Left Sidebar */}
      <aside className="forum-left-sidebar">
        <button
          className="forum-new-thread-btn"
          onClick={() => setShowNewThreadModal(true)}
        >
          New Thread
        </button>
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

      {/* New Thread Modal */}
      {showNewThreadModal && (
        <div className="forum-modal-overlay">
          <div className="forum-modal">
            <h3>Create New Thread</h3>
            <input
              type="text"
              placeholder="Thread Title"
              value={newThreadTitle}
              onChange={(e) => setNewThreadTitle(e.target.value)}
              className="forum-modal-input"
            />
            <textarea
              placeholder="Thread Content"
              value={newThreadContent}
              onChange={(e) => setNewThreadContent(e.target.value)}
              className="forum-modal-textarea"
            />
            <div className="forum-modal-buttons">
              <button onClick={handleAddThread}>Create Thread</button>
              <button onClick={() => setShowNewThreadModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="forum-main-content">
        {threads.map((thread) => (
          <div key={thread.id} className="forum-discussion-card">
            {/* Discussion Header */}
            <div className="forum-discussion-header">
              <img src={user} alt="Author" className="forum-author-image" />
              <div>
                <h3>{thread.title}</h3>
                <p className="forum-meta-info">
                  {thread.author} • Posted {thread.posted}
                </p>
                <div className="forum-tags">
                  {thread.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Discussion Body */}
            <p className="forum-discussion-body">{thread.content}</p>

            {/* Comments Section */}
            <div className="forum-comments">
              {thread.comments.map((comment) => (
                <div key={comment.id} className="forum-comment">
                  <p>
                    <strong>{comment.author}</strong> • {comment.posted}
                  </p>
                  <p>{comment.content}</p>
                  <div className="forum-comment-meta">
                    <span>{comment.likes} likes</span> •{" "}
                    <button className="forum-reply-btn">Reply</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Reply Section */}
            <div className="forum-reply-section">
              <textarea
                placeholder="Write your reply..."
                className="forum-reply-input"
                value={newReplyContent}
                onChange={(e) => setNewReplyContent(e.target.value)}
              ></textarea>
              <button
                className="forum-reply-btn"
                onClick={() => handleAddReply(thread.id)}
              >
                Post Reply
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* Right Sidebar */}
      <aside className="forum-right-sidebar">
        {/* Thread Statistics */}
        <div className="forum-card">
          <h4>Thread Statistics</h4>
          <p>Views: 1,234</p>
          <p>Replies: {threads[0].comments.length}</p>
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