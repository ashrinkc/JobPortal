import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./service.css";
const Service = () => {
  return (
    <div className="mainn">
      <Navbar />
      <div className="mainRec">
        <div className="RecruitTop">
          <h1>SERVICES</h1>
        </div>

        <div className="recruitmentInfo">
          <div className="recruitmentInfoTop">
            <small>
              This list presents the latest vacancies in the field of
              immigration and educational counseling in Poland. Brief job
              details include job title, organization name, job location,
              required experience, key qualifications, and application deadline.
              The most recent jobs are displayed first. Click on the position
              that interests you, read the job details, and if it's a good fit
              for you, click the Apply Now button to submit your application.
            </small>
          </div>
          <div className="recImg">
            <img src="https://www.apple.com/newsroom/images/product/imac/standard/Apple-Self-Service-Mac-Repair-August-2022-hero_big.jpg.large.jpg" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
