import React from "react";
import BottomBar from "../MainBottomBar/BottomBar";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerIn">
          <div className="footerInfo">
            <h2>JobCracker</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <h5>Location: Balaju</h5>
            <h5>Contact: 0000000</h5>
            <h5>Email: example@gmail.com</h5>
          </div>
          <div>
            <h3>Quick Links</h3>
            <p> Footer Link here</p>
            <p> Footer Link here</p>
            <p> Footer Link here</p>
            <p> Footer Link here</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <p> Footer Link here</p>
            <p> Footer Link here</p>
            <p> Footer Link here</p>
            <p> Footer Link here</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <p> Footer Link here</p>
            <p> Footer Link here</p>
            <p> Footer Link here</p>
            <p> Footer Link here</p>
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default Footer;
