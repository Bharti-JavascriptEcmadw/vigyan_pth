import React from "react";

import Event from '../components/Services/Event'
import Cbse from "../components/Robostic_Lab/Cbse";
import CompositeRobotics from "../components/Robostic_Lab/CompositeRobotics";
import CompositeLabImportance from "../components/Robostic_Lab/CompositeLabImportance";
import WhySetupLabs from "../components/Robostic_Lab/WhySetupLabs";
import HowVigyanCanHelp from "../components/Robostic_Lab/HowVigyanCanHelp";
import WhyPartner from "../components/Robostic_Lab/WhyPartner";

const Composite_Lab = () => {
  return (
    <>

    <Event/>
    <Cbse/>
    <CompositeRobotics/>
    <CompositeLabImportance/>
    <WhySetupLabs/>
   <HowVigyanCanHelp/>
   <WhyPartner/>
    </>
  );
};

export default Composite_Lab;
