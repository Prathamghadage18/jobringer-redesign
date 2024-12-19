import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedJobs from "./components/FeaturedJobs";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <FeaturedJobs />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
