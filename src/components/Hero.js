import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <h1>Find Your Dream Job Today</h1>
      <div className="search-bar">
        <input type="text" placeholder="Job Title or Keywords" />
        <input type="text" placeholder="Location" />
        <button>Search</button>
      </div>
    </section>
  );
};

export default Hero;
