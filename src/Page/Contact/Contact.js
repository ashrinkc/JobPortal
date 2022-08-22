import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./contact.css";
import Iframe from "react-iframe";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="mainContactContainer">
        <div className="contactContainer">
          <div>
            <div className="contactConInfo">
              <h1>CONTACT US</h1>
              <p>Leave a message we will reply you promptly</p>
            </div>
            <form>
              <div className="inputField">
                <div>
                  <h5>First Name</h5>
                  <input />
                  <h5>E-Mail</h5>
                  <input type="email" name="email" />
                </div>
                <div>
                  <h5>Last Name</h5>
                  <input />
                  <h5>Phone</h5>
                  <input />
                  <div className="mobileInput">
                    <h5>Address</h5>
                    <input />
                    <h5>Message</h5>
                    <input />
                    <div className="contactBtnContainer">
                      <button className="contactSubmitbtn">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="BigMsg">
                <h5>Address</h5>
                <input className="msgInput" />
                <h5>Message</h5>
                <textarea rows="5" cols="65" />
                <div className="contactBtnContainer">
                  <button className="contactSubmitbtn">Submit</button>
                </div>
              </div>
            </form>
          </div>
          <div className="contactItems">
            <div className="contactItem">
              <h6>Address</h6>
              <small>Naya Bazar</small>
            </div>
            <div className="contactItem">
              <h6>Contact no</h6>
              <small>984100001</small>
            </div>
            <div className="contactItem">
              <h6>Email</h6>
              <small>example@gmail.com</small>
            </div>
          </div>
        </div>
        <div className="map">
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56096.85759164457!2d81.07041065789676!3d28.50803506142142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a20c3137c6209b%3A0xef662ab7d48804c8!2sTikapur%2010901!5e0!3m2!1sen!2snp!4v1655166324678!5m2!1sen!2snp"
            width="100%"
            height="450"
          ></Iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
