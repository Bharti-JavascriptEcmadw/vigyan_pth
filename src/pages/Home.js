import React from "react";
import Banner from "../components/Home/Banner";
import ServicesSection from "../components/Home/ServicesSection";
import VideoPreview from "../components/Home/VideoPreview";
import SkillSection from "../components/Home/SkillSection";
import Solutions from "../components/Home/Solutions";
import AboutVigyan from "../components/Home/AboutVigyan";
import StatsCounter from "../components/Home/StatsCounter";
import InspireYoungMinds from "../components/Home/InspireYoungMinds";
import CityCenters from "../components/Home/CityCenter";
import Gallery from "../components/Home/Gallery";
import TrainedSchoolsCarousel from "../components/Home/TrainedSchoolsCarousel";


const Home = () => {
  return (
    <>
      <Banner />
      <InspireYoungMinds/>
      <AboutVigyan/>
      <CityCenters/>
      <StatsCounter/>
      <ServicesSection />
      <VideoPreview />
    
<Gallery/>      
<TrainedSchoolsCarousel/>
  <SkillSection />
      
      <Solutions />
    </>
  );
};

export default Home;


// import React, { lazy, Suspense } from "react";

// // Lazy-loaded components
// const Banner = lazy(() => import("../components/Home/Banner"));
// const InspireYoungMinds = lazy(() => import("../components/Home/InspireYoungMinds"));
// const AboutVigyan = lazy(() => import("../components/Home/AboutVigyan"));
// const CityCenters = lazy(() => import("../components/Home/CityCenter"));
// const StatsCounter = lazy(() => import("../components/Home/StatsCounter"));
// const ServicesSection = lazy(() => import("../components/Home/ServicesSection"));
// const VideoPreview = lazy(() => import("../components/Home/VideoPreview"));
// const SkillSection = lazy(() => import("../components/Home/SkillSection"));
// const Solutions = lazy(() => import("../components/Home/Solutions"));

// const Home = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Banner />
//       <InspireYoungMinds />
//       <AboutVigyan />
//       <CityCenters />
//       <StatsCounter />
//       <ServicesSection />
//       <VideoPreview />
//       <SkillSection />
//       <Solutions />
//     </Suspense>
//   );
// };

// export default Home;
