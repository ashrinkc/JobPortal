import React from "react";
import "./home.css";
const TopSearches = (props) => {
  return (
    <div className="search">
      <h5>{props.item.name}</h5>
    </div>
  );
};

export default TopSearches;
