import React from 'react';
import Banner1 from '../components/About/Banner1';
import MissionVision from '../components/About/MissionVision';
import WhyChooseUs from '../components/About/WhyChooseUs';
import TeamSection from '../components/About/TeamSection';
// import Banner2 from '../components/About/Banner2';


const About = () => {
  return (
    <div>
      <Banner1 />
      {/* <Banner2/> */}
      <MissionVision/>
      <WhyChooseUs/>
      <TeamSection/>
    </div>
  );
};

export default About;
