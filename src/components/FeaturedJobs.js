import React from "react";
import "./FeaturedJobs.css";

const FeaturedJobs = () => {
  const jobs = [
    { title: "Software Engineer", company: "TechCorp", location: "New York" },
    {
      title: "Product Manager",
      company: "Innovate Inc",
      location: "San Francisco",
    },
    { title: "Data Scientist", company: "DataWorks", location: "Remote" },
  ];

  return (
    <section className="featured-jobs">
      <h2>Featured Jobs</h2>
      <div className="jobs-grid">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedJobs;
