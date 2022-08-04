import React from "react";
import "./jobs.css";
const IndiJobs = (props) => {
  return (
    <div className="indiJobs">
      <div className="insideJobs">
        <h4>{props.item.name}</h4>
        <small>{props.item.desc}</small>
      </div>
    </div>
  );
};

export default IndiJobs;
