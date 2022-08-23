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
