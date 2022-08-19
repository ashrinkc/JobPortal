import React from "react";
import "./maintopbar.css";
import fbook from "../../Images/facebook.png";
import lin from "../../Images/in.png";
import twitter from "../../Images/twitter.png";
import insta from "../../Images/insta.png";
import whatsapp from "../../Images/whatsapp.png";
const MainTopBar = () => {
  return (
    <div className="topBarContainer">
      <div className="topBarInfo">
        <div className="conInfo">
          <div>CONTACT:9861859764</div>
          <div>EMAIL:info@rhubarbsajoon.com</div>
        </div>
        <div className="socialImg">
          <div>
            <img src={fbook} />
          </div>
          <div>
            <img src={lin} />
          </div>
          <div>
            <img src={twitter} />
          </div>
          <div>
            <img src={insta} />
          </div>
          <div>
            <img src={whatsapp} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTopBar;
