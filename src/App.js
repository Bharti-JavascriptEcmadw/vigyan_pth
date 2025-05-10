import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Testimonal from "./pages/Testimonal"
import Contact from "./pages/Contact"
import BookDemo from "./pages/BookDemo";
import LabInAction from "./pages/LabInAction";
// import ProjectInVideo from "./pages/ProjectInVideo";
import ResourceEvent from "./pages/ResourceEvent";
import SchoolProgram from "./pages/SchoolProgram";
import CompositeLab from "./pages/CompositeLab";
import DroneIot from "./pages/DroneIot";
import Courses from "./pages/Courses";



const App = () => {
  return (
    <Router>
              <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/success-story" element={<Testimonal/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookdemo" element={<BookDemo />} />
        <Route path="/lab-in-action" element={<LabInAction />} />
        <Route path="/event" element={<ResourceEvent/>} />
        <Route path="/courses" element={<Courses />} />

        <Route path="/school-program" element={<SchoolProgram />} />
        <Route path="/composite-lab" element={<CompositeLab />} />
        <Route path="/drone-iot" element={<DroneIot />} />





      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
