import React from "react";
import About from "../components/home/About";
import Contact from "../components/home/contact";
import Faqs from "../components/home/faqs";
import Feature from "../components/home/Feature";
import AppHero from "../components/home/Hero";
import HowItWork from "../components/home/HowItWork";
import Pricing from "../components/home/Pricing";

const AppHome = () => {
  return (
    <div className="main">
      <AppHero />
      <About />
      <Feature />
      <HowItWork />
      <Faqs />
      <Pricing />
      <Contact />
    </div>
  );
};

export default AppHome;
