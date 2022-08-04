import React from "react";
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
        </div>
      </div>
    </div>
  );
};

export default Jobs;
