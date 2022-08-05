import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import IndiJobs from "./IndiJobs";
import { JobsData } from "./JobAvailableData";
import "./jobs.css";
const Jobs = () => {
  const jData = JobsData.map((items) => {
    return <IndiJobs item={items} />;
  });
  return (
    <div>
      <Navbar />
      <div className="jobsMain">
        <div className="jobHead">
          <div className="jobheadSrch">
            <input placeholder="Search Your Job" />
            <button>Search</button>
          </div>
          <div className="indiJobDetails">{jData}</div>
          <button className="jobBtn">Show More</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
