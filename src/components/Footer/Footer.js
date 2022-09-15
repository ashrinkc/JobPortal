import React from "react";
import BottomBar from "../MainBottomBar/BottomBar";
import "./footer.css";
import multiEmp from "../../Images/multiEmp.png";
import fbook from "../../Images/facebook.png";
import lin from "../../Images/in.png";
import twitter from "../../Images/twitter.png";
import insta from "../../Images/insta.png";
import whatsapp from "../../Images/whatsapp.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="footerContainer">
        <div className="footerIn">
          <div className="footerInfo">
            {/* <h2>MULTI EMPLOYMENT AGENCY</h2> */}
            <img src={multiEmp} />
            <p className="spo">
              As an organization run by dedicated employees and directors with
              many years of experience in bridging work and human resources, MEA
              is a specialist in staffing solutions in Poland. In addition, MEA
              is committed to building and continuously expanding its database
              of job seekers, helping potential clients achieve their goals of
              finding the right people for the right jobs through our online
              platform.
            </p>
            <p className="sp">
              <a style={{ color: "rgb(236, 27, 52)" }}>
                2022 Multi Employment Agency.{" "}
              </a>
              All rights reserved
            </p>
          </div>
          <div className="footRight">
            <div className="footConn">
              <div className="linkMob">
                <h3>Company</h3>
                <p onClick={() => navigate("/about") || window.scrollTo(0, 0)}>
                  {" "}
                  About Us
                </p>
                <p onClick={() => navigate("/blog") || window.scrollTo(0, 0)}>
                  {" "}
                  Blog
                </p>
                <p
                  onClick={() => navigate("/contact") || window.scrollTo(0, 0)}
                >
                  {" "}
                  Contact
                </p>
                <p
                  onClick={() => navigate("/about") || window.scrollTo(0, 1000)}
                >
                  {" "}
                  Our Team
                </p>
              </div>
              <div className="linkMob">
                <h3>Support</h3>
                <p
                  onClick={() => navigate("/service") || window.scrollTo(0, 0)}
                >
                  {" "}
                  Our Service
                </p>
                <p onClick={() => navigate("/visa") || window.scrollTo(0, 0)}>
                  {" "}
                  Visa Process
                </p>
                <p
                  onClick={async () =>
                    navigate("/") || window.scrollTo(0, 2100)
                  }
                >
                  {" "}
                  How to Apply?
                </p>
                <p onClick={() => navigate("/terms") || window.scrollTo(0, 0)}>
                  {" "}
                  Terms of Service
                </p>
              </div>
            </div>
            <div className="commImgMain">
              <h3>Connect</h3>
              <div className="connImg">
                <img
                  onClick={() =>
                    (window.location.href =
                      "https://www.facebook.com/profile.php?id=100085324913749")
                  }
                  src={fbook}
                />
                <img src={lin} />
                <img src={twitter} />
                <img
                  onClick={() =>
                    (window.location.href =
                      "https://www.instagram.com/multiemploymentagency/?fbclid=IwAR1NbYatmGqQpiKUFJ_rNNGM1X8Yz8uQJP88Glc5NyNl1UDa_kcv9TUG9Uc")
                  }
                  src={insta}
                />
                <img src={whatsapp} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default Footer;
