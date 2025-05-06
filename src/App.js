import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Testimonal from "./pages/Testimonal"
import Contact from "./pages/Contact"
import BookDemo from "./components/BookDemo";
import Event from "./pages/ResourceEvent";
import LabInAction from "./components/Resources/LabInAction";
import ProjectVideo from "./components/Resources/ProjectVideo";
import SchoolProgram from "./pages/SchoolProgram";
import CompositeLab from "./pages/CompositeLab";



// import other pages like About, Contact, etc., if any

const App = () => {
  return (
    <Router>
              <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* You can add more routes here */}
        <Route path="/test" element={<Testimonal/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookdemo" element={<BookDemo />} />
        <Route path="/lab-in-action" element={<LabInAction />} />
        <Route path="/event" element={<Event />} />
        <Route path="/school-program" element={<SchoolProgram />} />
        <Route path="/composite-lab" element={<CompositeLab />} />




      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
