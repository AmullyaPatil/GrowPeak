import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Mentors from "./Pages/MentorSearchPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mentors" element={<Mentors />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
