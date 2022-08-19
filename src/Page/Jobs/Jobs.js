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
  useEffect(() => {
    setLoading(true);
    getAllJobs(dispatch);
    setLoading(false);
  }, [dispatch]);
  const jData = gJobs.map((items) => {
    return <IndiJobs item={items} />;
  });
  return (
    <div>
      <Navbar />
      <div className="jobsMain">
        <div className="jobHead">
          <div className="jobheadSrch">
            {/* <input placeholder="Search Your Job" />
            <button>Search</button> */}
            <SearchBar />
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
