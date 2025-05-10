import React from "react";

import Event from '../components/Services/Event'
import DoItYourselfKits from "../components/Services/DoItYourselfKits";
import GlobalProgram from "../components/Services/GlobalProgram";
import CoreCompetencies from "../components/Services/CoreCompetencies";
import TransformSection from "../components/Services/TransformSection";
import JoinUsSection from "../components/Services/JoinUsSection";
import TransfEdu from "../components/Services/TransfEdu";
import CICApproach from "../components/Services/CICApporach";




const SchoolProgram = () => {
  return (
    <>
        <Event/>

<CICApproach/>
<TransfEdu/>

<GlobalProgram/>
<CoreCompetencies/>
<DoItYourselfKits/>
<TransformSection/>
<JoinUsSection></JoinUsSection>
    </>
  );
};

export default SchoolProgram;
