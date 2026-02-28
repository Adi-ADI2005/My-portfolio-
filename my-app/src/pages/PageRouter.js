import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/index.jsx";
import Journey from "./Journey/index.jsx";
import Contact from "./Contact/index.jsx";
import Navcompo from "../Components/NavBar/index.jsx";  

function PageRouter() {
  return (
    <Router>
      
      <Navcompo />
      

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
    </Router>
  );
}

export default PageRouter;
