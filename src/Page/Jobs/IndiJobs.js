import React from "react";
import { useNavigate } from "react-router-dom";
import "./jobs.css";
const IndiJobs = (props) => {
  const navigate = useNavigate();

  const jobs = () => {
    window.scrollTo(0, 0);
    navigate("/contact");
  };
  return (
    <div className="indiJobs">
      <div className="insideJobs" onClick={jobs}>
        <h4>{props.item.title}</h4>
        <small>{props.item.desc}</small>
      </div>
    </div>
  );
};

export default IndiJobs;
