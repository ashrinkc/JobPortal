import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./visa.css";
const Visa = () => {
  return (
    <div className="mainn">
      <Navbar />
      <div className="mainRec">
        <div className="RecruitTop">
          <h1>VISA PROCESS</h1>
        </div>

        <div className="recruitmentInfo">
          <div className="recruitmentInfoTop">
            <small>
              We are experienced visa consultants based on Poland focused on
              providing fast and easy service for all your travel needs. Whether
              it's visas, travel insurance, air tickets or anything else, we've
              got you covered.
            </small>
            <small>
              MEA is Poland’s leading visa company, providing hassle-free
              offline and online visa services specifically for India with a
              team of highly skilled visa professionals. With offices in various
              parts of the country, we serve thousands of clients and have a
              reputation for reliability and reliability. We are one of the few
              visa agencies in Poland providing consultancy on various types of
              visas such as tourist, business, work, and study visas for over
              200 countries. Our specialty is being the leading visa agency for
              the Schengen Agreement in the UK, USA, Australia, Canada and
              India.
            </small>
          </div>
          <div className="recImg">
            <img src="https://st2.depositphotos.com/1013693/6928/i/450/depositphotos_69283909-stock-photo-usa-visa-in-a-passport.jpg" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Visa;
