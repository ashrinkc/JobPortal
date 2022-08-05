import React from "react";
import "./aboutus.css";
const IndiAboutUs = (props) => {
  return (
    <div>
      <div className="oTm">
        <img src={props.item.img} />
        <h4>{props.item.title}</h4>
        <p>{props.item.info}</p>
      </div>
    </div>
  );
};

export default IndiAboutUs;
