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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
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
                <p onClick={() => navigate("/about")}> About Us</p>
                <p onClick={() => navigate("/blog")}> Blog</p>
                <p onClick={() => navigate("/contact")}> Contact</p>
                <p> Our Team</p>
              </div>
              <div className="linkMob">
                <h3>Support</h3>
                <p> Our Service</p>
                <p> Visa Process</p>
                <p> How to Apply?</p>
                <p> Terms of Service</p>
              </div>
            </div>
            <div className="commImgMain">
              <h3>Connect</h3>
              <div className="connImg">
                <img src={fbook} />
                <img src={lin} />
                <img src={twitter} />
                <img src={insta} />
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
