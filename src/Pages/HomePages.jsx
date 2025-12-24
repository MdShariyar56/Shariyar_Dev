import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import FeaturedProject from "./FeaturedProject";
import Contact from "./Contact";
import Footer from "../Components/Footer";




const HomePages = () => {
  return (
    <div>
      <Home />
     <About></About>
     <Skills></Skills>
     <Education></Education>
     <FeaturedProject></FeaturedProject>
     <Contact></Contact>
     <Footer></Footer>
      
      
     
    </div>
  );
};

export default HomePages;
