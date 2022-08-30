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
  const [image, setImage] = useState();
  useEffect(() => {
    const getIdbyData = async () => {
      try {
        const res = await axios.get(
          "https://multi-agency.herokuapp.com/api/v1/blog/find/" + path
        );
        setTitle(res.data.title);
        setDesc(res.data.desc);
        setImage(res.data.img.url);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getIdbyData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="mainIndiBlog">
        <div className="indiBlog">
          <h1>{title}</h1>
          <img src={image} />
          <p>{desc}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndividualBlog;
