import React from "react";

import Event from '../components/OurServices/Event'
import BhartiSection from "../components/OurServices/BhartiSection";
import DoItYourselfKits from "../components/OurServices/DoItYourselfKits";
import School from "../components/OurServices/School";

import GlobalProgram from "../components/OurServices/GlobalProgram";
import CoreCompetencies from "../components/OurServices/CoreCompetencies";
import TransformSection from "../components/OurServices/TransformSection";
import JoinUsSection from "../components/OurServices/JoinUsSection";




const SchoolProgram = () => {
  return (
    <>

<School/>

<BhartiSection/>
<GlobalProgram/>
<CoreCompetencies/>
    <DoItYourselfKits/>

    <Event/>
    <TransformSection/>
<JoinUsSection></JoinUsSection>
    </>
  );
};

export default SchoolProgram;
