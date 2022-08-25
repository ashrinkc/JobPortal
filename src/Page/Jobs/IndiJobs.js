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
    <div className="indiJobs" onClick={jobs}>
      <div className="insideJobs">
        <h4>{props.item.name}</h4>
        <small>{props.item.desc}</small>
        <small>{props.item.desctwo}</small>
        <small>{props.item.descthree}</small>
      </div>
    </div>
  );
};

export default IndiJobs;
