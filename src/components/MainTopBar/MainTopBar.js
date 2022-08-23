import React, { useState } from "react";
import "./maintopbar.css";
import { useTranslation } from "react-i18next";
import fbook from "../../Images/facebook.png";
import lin from "../../Images/in.png";
import twitter from "../../Images/twitter.png";
import insta from "../../Images/insta.png";
import whatsapp from "../../Images/whatsapp.png";
import poland from "../../Images/poland.png";
import globe from "../../Images/globe.png";
import { BsGlobe } from "react-icons/bs";
import { GiUsaFlag } from "react-icons/gi";

const MainTopBar = () => {
  const { t, i18n } = useTranslation();

  const [state, setState] = useState(true);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setState(!state);
  };
  return (
    <div className="topBarContainer">
      <div className="topBarInfo">
        <div className="conInfo">
          <div>{t("CONTACT")}:9861859764</div>
          <div>{t("EMAIL")}:info@rhubarbsajoon.com</div>
        </div>
        <div className="socialImg">
          <div>
            <img src={fbook} alt="socialmedia" />
          </div>
          <div>
            <img src={lin} alt="socialmedia" />
          </div>
          <div>
            <img src={twitter} alt="socialmedia" />
          </div>
          <div>
            <img src={insta} alt="socialmedia" />
          </div>
          <div>
            <img src={whatsapp} alt="socialmedia" />
          </div>
        </div>
      </div>
      <div className="language-selector">
        {/* <div className="globe">
          <img src={globe} alt="language-slect">
          </img>
        </div> */}
        <div className="globe">
          <BsGlobe />
        </div>
        <button
          className={
            "english-button " + (state ? "english-button" : "polish-button")
          }
          type="button"
          onClick={() => {
            state ? changeLanguage("en") : changeLanguage("pl");
          }}
        >
          {state ? <div className="poland"><img src={poland} alt="poland"></img> </div>: <GiUsaFlag />}
        </button>
      </div>
    </div>
  );
};

export default MainTopBar;
