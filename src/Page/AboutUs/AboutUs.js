import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./aboutus.css";
import IndiAboutUs from "./IndiAboutUs";
import { aboutData } from "./AboutUsData";
import Footer from "../../components/Footer/Footer";
import team from "../../Images/team.png";
import teamtwo from "../../Images/teamTwo.jpg";
import teamthree from "../../Images/teamThree.jpg";
import teamfour from "../../Images/teamfour.jpg";
import teamfive from "../../Images/teamfive.png";
import teamsix from "../../Images/teamsix.jpg";
const AboutUs = () => {
  return (
    <div className="mainn">
      <Navbar />
      <div className="aboutMain">
        <div className="aboutContainer">
          <h3 style={{ color: "red" }}>About Multi Employment Agency</h3>
          <small>
            As an organization run by dedicated employees and directors with
            many years of experience in bridging work and human resources, MEA
            is a specialist in staffing solutions in Poland. In addition, MEA is
            committed to building and continuously expanding its database of job
            seekers, helping potential clients achieve their goals of finding
            the right people for the right jobs through our online platform. We
            envision an online employment platform that enables companies to
            find the perfect talent and individuals to pursue rewarding careers.
            “We build bridges between employers and job seekers.” With this
            mission statement, we maintain healthy relationships with our
            clients and job seekers, providing the best service and advice to
            connect jobs and talent. We would like to provide we work as a team
            and share knowledge for continuous improvement, learning, and
            innovation. We value the trust our customers place in us and strive
            to live up to that trust by providing reliable service.
          </small>
        </div>
        <div className="gallery">
          <h2 style={{ color: "red" }}>Gallery</h2>
          <div className="galleryGrid">
            <img className="item1" src={teamsix} />
            <img className="item2" src={teamtwo} />
            <img className="item3" src={teamthree} />
            <img className="item4" src={teamfour} />
            <img className="item5" src={teamfive} /> 
            <img className="item6" src={team} />
          </div>
        </div>
        <div className="ourTeamContainer">
          <h3 style={{ color: "red" }}>Our Team</h3>
          <div className="ourTeam">
            {aboutData.map((item) => {
              return <IndiAboutUs item={item} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
