import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./aboutus.css";
import IndiAboutUs from "./IndiAboutUs";
import { aboutData } from "./AboutUsData";
import Footer from "../../components/Footer/Footer";
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
            <img
              className="item1"
              src="https://thumbs.dreamstime.com/b/couple-sitting-couch-talking-vector-illustration-sketch-cartoon-style-man-woman-living-room-interior-friendly-171787366.jpg"
            />
            <img
              className="item2"
              src="https://cdn.dribbble.com/uploads/599/original/86d75f5ebf6abc13a630dda33b292727.png?1544829141"
            />
            <img
              className="item3"
              src="https://www.istockphoto.com/resources/images/IllustrationsLanding/Essentials_iStock_1120x740_-1255353333.jpg"
            />
            <img
              className="item4"
              src="https://3udno63459u23yboa6366rls-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/RanganathKrishnamani_Dryino_out_masks-Feature.jpg"
            />
            <img
              className="item5"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYdVCyVjhgSYkopz4THn5LgX1samQH9lM3g&usqp=CAU"
            />
            <img
              className="item6"
              src="https://miro.medium.com/max/1021/0*O-mKgxVEBOmX06R7.jpg"
            />
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
