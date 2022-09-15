import React from "react";
import "./maintopbar.css";
import fbook from "../../Images/facebook.png";
import lin from "../../Images/in.png";
import twitter from "../../Images/twitter.png";
import insta from "../../Images/insta.png";
import whatsapp from "../../Images/whatsapp.png";
import { useNavigate } from "react-router-dom";
const MainTopBar = () => {
  const navigate = useNavigate();
  return (
    <div className="topBarContainer">
      <div className="topBarInfo">
        <div className="conInfo">
          <div>CONTACT:+48-537298123</div>
          <div> multiemploymentagency@gmail.com</div>
        </div>
        <div className="socialImg">
          <div>
            <img
              onClick={() =>
                (window.location.href =
                  "https://www.facebook.com/profile.php?id=100085324913749")
              }
              src={fbook}
            />
          </div>
          <div>
            <img src={lin} />
          </div>
          <div>
            <img src={twitter} />
          </div>
          <div>
            <img
              onClick={() =>
                (window.location.href =
                  "https://www.instagram.com/multiemploymentagency/?fbclid=IwAR1NbYatmGqQpiKUFJ_rNNGM1X8Yz8uQJP88Glc5NyNl1UDa_kcv9TUG9Uc")
              }
              src={insta}
            />
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
