import React from "react";
import Hero from "../components/Hero";
import Homecard from "../components/Homecard";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Homecard />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default Homepage;
