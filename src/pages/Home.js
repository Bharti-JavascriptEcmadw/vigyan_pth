import React from "react";
import Banner from "../components/Home/Banner";
import ServicesSection from "../components/Home/ServicesSection";
import VideoPreview from "../components/Home/VideoPreview";
import SkillSection from "../components/Home/SkillSection";
import Solutions from "../components/Home/Solutions";
import AboutVigyan from "../components/Home/AboutVigyan";


const Home = () => {
  return (
    <>
      <Banner />
      <AboutVigyan/>
      <ServicesSection />
      <VideoPreview />
      <SkillSection />
      <Solutions />
    </>
  );
};

export default Home;
