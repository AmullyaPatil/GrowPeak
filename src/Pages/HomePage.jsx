import React from "react";
// import Header from "../components/Header";
import Hero from "../components/Hero";
// import Footer from "../components/Footer";
// import FeaturedTopics from "../components/FeaturedTopics";
import CommunityMembers from "../components/CommunityMembers";
import Categories from "../components/Categories";

const Homepage = () => {
  return (
    <>
    <Hero />
    <Categories />
    {/* <FeaturedTopics /> */}
    <CommunityMembers />
    </>
  );
};

export default Homepage;
