import React from "react";
import "./Searchbar.css";
const SearchBar = () => {
  return (
    <div>
      <div className="dreamJob">
        <input placeholder="Find your dream job" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
