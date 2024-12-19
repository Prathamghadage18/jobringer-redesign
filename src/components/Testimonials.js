import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alice",
      feedback: "This platform helped me find the perfect job!",
    },
    { name: "Bob", feedback: "Easy to use and very effective." },
    { name: "Charlie", feedback: "Highly recommend it to anyone job hunting." },
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
