import React from "react";

const HomeAvailableJobs = (props) => {
  return (
    <div>
      <div className="availableJobs">
        <h5>{props.item.name}</h5>
        <p>{props.item.num}</p>
      </div>
    </div>
  );
};

export default HomeAvailableJobs;
