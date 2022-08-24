import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./blog.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
const IndividualBlog = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  useEffect(() => {
    const getIdbyData = async () => {
      try {
        const res = await axios.get(
          "https://multi-agency.herokuapp.com/api/v1/blog/find/" + path
        );
        setTitle(res.data.title);
        setDesc(res.data.desc);
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getIdbyData();
  }, []);
  return (
    <div className="mainIndiBlog">
      <Navbar />
      <div className="indiBlog">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <Footer />
    </div>
  );
};

export default IndividualBlog;
