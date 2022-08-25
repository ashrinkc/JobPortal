import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import IndiJobs from "./IndiJobs";
import { JobsData } from "./JobAvailableData";
import { useDispatch, useSelector } from "react-redux";
import "./jobs.css";
import { getAllJobs } from "../../redux/apiCalls";
import SearchBar from "../../components/SearchBar/SearchBar";
const Jobs = () => {
  let gJobs = useSelector((state) => state.job.jobs);
  // console.log(gJobs);
  //get all blogs
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setLoading(true);
    getAllJobs(dispatch);
    setLoading(false);
  }, [dispatch]);
  const jData = JobsData.map((items) => {
    return <IndiJobs item={items} />;
  });
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredData = JobsData.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <Navbar />
      <div className="jobsMain">
        <div className="jobHead">
          <div className="jobheadSrch">
            {/* <input placeholder="Search Your Job" />
            <button>Search</button> */}
            {/* <SearchBar /> */}
            <div className="dreamJob">
              <input
                placeholder="Find your dream job"
                onChange={handleChange}
              />
              <button>Search</button>
            </div>
          </div>

          <div className="indiJobDetails">
            {filteredData.map((items) => {
              return <IndiJobs item={items} />;
            })}
          </div>
          {/* <button className="jobBtn">Show More</button> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
