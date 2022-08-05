import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./aboutus.css";
import IndiAboutUs from "./IndiAboutUs";
import { aboutData } from "./AboutUsData";
import Footer from "../../components/Footer/Footer";
const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="aboutMain">
        <div className="aboutContainer">
          <h3 style={{ color: "red" }}>Company Name</h3>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo
            asperiores laudantium in minima est quis aliquam, deleniti illo
            saepe ut culpa ea perspiciatis consequatur voluptatibus expedita non
            voluptas nulla velit voluptate. Veritatis commodi, asperiores veniam
            eveniet, sit dolorum doloribus distinctio quod architecto deleniti
            at numquam ipsum odio velit minus? Officia modi libero, cum tenetur
            debitis vero quae minus consequuntur aspernatur non nulla ad dicta,
            rem deleniti quas dolores architecto nisi. Optio dolores modi
            sapiente itaque vel, aliquam aperiam beatae quidem atque laudantium
            sequi delectus voluptates distinctio molestiae cum cumque obcaecati
            recusandae deleniti similique, dignissimos et doloremque?
            Dignissimos, assumenda nihil?
          </small>
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
