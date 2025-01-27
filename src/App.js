import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Mentors from "./Pages/MentorSearchPage";
import Header1 from "./components/Header1";
import DiscussionPage from "./components/Forum";
import Footer from "./components/Footer";
import AuthForm from "./components/AuthForm"; // Import the new page

function App() {
  return (
    <Router>
      <Header1 />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/forum" element={<DiscussionPage />} />
        <Route path="/auth" element={<AuthForm />} /> {/* Add the route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
