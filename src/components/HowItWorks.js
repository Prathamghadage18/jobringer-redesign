import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  const steps = [
    { title: "Search Jobs", description: "Find jobs that match your skills." },
    {
      title: "Apply Easily",
      description: "Send applications in a few clicks.",
    },
    { title: "Get Hired", description: "Land your dream job effortlessly." },
  ];

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
