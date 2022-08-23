import React, { useState } from "react";
import "./home.css";
import { useTranslation } from "react-i18next";
import HomeAvailableJobs from "./HomeAvailableJobs";
import { HomeData } from "./HomeData";
import TopSearches from "./TopSearches";
import { Searches } from "./TopSearchesData";
import handy from "../../Images/handyFolder.gif";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import human from "../../Images/human.png";
import supCom from "../../Images/SupportComp.png";
import woman from "../../Images/businesswoman.png";
import SearchBar from "../../components/SearchBar/SearchBar";
import MainTopBar from "../../components/MainTopBar/MainTopBar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [info1, setInfo1] = useState(null);
  const [info2, setInfo2] = useState(null);
  const [info3, setInfo3] = useState(null);
  const [info4, setInfo4] = useState(null);
  const navigate = useNavigate();

  const data = HomeData.map((items) => {
    return <HomeAvailableJobs item={items} />;
  });

  const searchData = Searches.map((items) => {
    return <TopSearches item={items} />;
  });

  const { t, i18n } = useTranslation();

  return (
    <div>
      {/* <MainTopBar /> */}
      <Navbar />
      <div className="homeContainer">
        <div className="homeContent">
          <div className="homeInfo">
            <h1>{t("FIND YOUR JOB IN POLAND")}</h1>
            <small>
              {t('Our world class services help you land your dream job. Join Us and secure your future.')}
            </small>
            <button onClick={() => navigate("/contact")}>{t('Contact Us')}</button>
          </div>
          <div className="homeImg">
            {/* <img src="https://www.icegif.com/wp-content/uploads/reading-icegif-16.gif" /> */}
            <img src={human} />
          </div>
        </div>
        <div className="mainSupCom">
          <h1>TRUSTED BY 100+ COMPANIES IN POLAND</h1>
          <div className="supComContainer">
            <div>
              <img className="supCom" src={supCom} />
            </div>
            <div>
              <img className="supCom" src={supCom} />
            </div>
            <div>
              <img className="supCom" src={supCom} />
            </div>
            <div>
              <img className="supCom" src={supCom} />
            </div>
            <div>
              <img className="supCom" src={supCom} />
            </div>
          </div>
        </div>
        {/* <hr className="hrr" /> */}
        <div className="topSearch">
          {/* <div className="dreamJob">
            <input placeholder="find your dream job" />
            <button>Search</button>
          </div> */}
          <div>
            <h1>Find the right job</h1>
          </div>
          <SearchBar />
          <h2>Top Searches</h2>
          <div className="sData">{searchData}</div>
          <div onClick={() => navigate("/jobs")} className="viewJobs">
            <h6>View All Jobs</h6>
          </div>
        </div>
        {/* <hr className="hrr" /> */}
        {/* <div className="hrcont">
      <hr className="hrrt" />
    </div> */}

        {/* <hr className="hrr" /> */}
        <div className="talent">
          <div className="talentIn">
            <div className="talentInfo">
              <h3>Apply directly from</h3>
              <a>India & Nepal.</a>
              <button onClick={() => navigate("/about")}>Get Started</button>
            </div>
            <div className="bussinessWoman">
              <img src={woman} />
            </div>
          </div>
        </div>
        <div className="chooseUs">
          <div className="getJob">
            <h1>Apply for working visa in 4 steps:</h1>
            <h5>
              Now you can apply for working visa of Poland from India & Nepal.
            </h5>
            <div className="mainTask">
              <div className="tasks">
                <div className="tasknum">
                  <div>1</div>
                  <div>3</div>
                </div>
                <div className="taskInfo">
                  <div>
                    <h1>Submit your CV & Document</h1>
                    <small>
                      Now you can apply for Working Visa of Poland from India &
                      Nepal. Submit your CV & Documents to our given mail
                      address.
                    </small>
                  </div>
                  <div>
                    <h1>Apply the Dates for Embassy in Delhi</h1>
                    <small>
                      Now you can apply for Working Visa of Poland from India &
                      Nepal. Submit your CV & Documents to our given mail
                      address.
                    </small>
                  </div>
                </div>
              </div>
              <div className="tasks">
                <div className="tasknum">
                  <div>2</div>
                  <div>4</div>
                </div>
                <div className="taskInfo">
                  <div>
                    <h1>Contact Us for help and guidance</h1>
                    <small>
                      Now you can apply for Working Visa of Poland from India &
                      Nepal. Submit your CV & Documents to our given mail
                      address.
                    </small>
                  </div>
                  <div>
                    <h1>Apply the Dates for Embassy in Delhi</h1>
                    <small>
                      Now you can apply for Working Visa of Poland from India &
                      Nepal. Submit your CV & Documents to our given mail
                      address.
                    </small>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="stepsContainer">
              <div className="stepsImg">
                <img src="http://i.imgur.com/ia3Jrgc.png" />
              </div>
              <div className="steps">
                <h2>Make Your Own Video And Join Us</h2>
                <div>
                  <p style={{ color: "red" }}>Step 1</p>
                  <h5>Make a video and send Us</h5>
                  <p>
                    Upload Your Video and send us so we can review your
                    qualifications
                  </p>
                </div>
                <div>
                  <p style={{ color: "red" }}>Step 2</p>
                  <h5>Make a video and send Us</h5>
                  <p>
                    Upload Your Video and send us so we can review your
                    qualifications
                  </p>
                </div>
                <div>
                  <p style={{ color: "red" }}>Step 3</p>
                  <h5>Make a video and send Us</h5>
                  <p>
                    Upload Your Video and send us so we can review your
                    qualifications
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          {/* <hr className="hrr" /> */}
          {/* <div className="availableJobsContainer">
            <h2>Available Jobs</h2>
            <div className="avaJobsData">{data}</div>
          </div> */}
          {/* <hr className="hrr" /> */}
          {/* <h2>Why Choose Us</h2>
          <div className="choseMainContainer">
            <div className="choseContainer">
              <div className="choseConIn">
                <img src="" />
                <h5 style={{ color: "red" }}>Trusted</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="choseContainer">
              <div className="choseConIn">
                <img src="" />
                <h5 style={{ color: "red" }}>Easy To Use</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="choseContainer">
              <div className="choseConIn">
                <img src="" />
                <h5 style={{ color: "red" }}>Faster</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
          <hr className="hrr" /> */}

          <div className="faqContainer">
            {/* <div className="faqInfoone">
              <small style={{ color: "red" }}>KNOW YOUR ANSWER</small>
              <h2>FAQ</h2>
            </div> */}
            <div className="faq">
              <div>
                {/* <img src="https://media2.giphy.com/media/xTiN0IuPQxRqzxodZm/giphy.gif" /> */}
                <img src={woman} />
              </div>
              <div className="faqInfo">
                <div>
                  <div className="faqInfoone">
                    <small style={{ color: "red" }}>KNOW YOUR ANSWER</small>
                    <h2>FAQ</h2>
                  </div>
                  <h6>
                    How can i make Through this Website{" "}
                    <a
                      className="show"
                      style={{ color: "red" }}
                      onClick={() => setInfo1(!info1)}
                    >
                      {info1 ? "-" : "+"}
                    </a>
                  </h6>
                  {info1 && (
                    <p className="faqDesc">
                      This is super easy to make your first resume or cv by
                      using our website so fast and easy
                    </p>
                  )}
                </div>
                <div>
                  <h6>
                    How can i find my dream job here{" "}
                    <a
                      className="show"
                      style={{ color: "red" }}
                      onClick={() => setInfo2(!info2)}
                    >
                      {info2 ? "-" : "+"}
                    </a>
                  </h6>
                  {info2 && (
                    <p className="faqDesc">
                      This is super easy to make your first resume or cv by
                      using our website so fast and easy
                    </p>
                  )}
                </div>
                <div>
                  <h6>
                    How long will it take to get a permanent job{" "}
                    <a
                      className="show"
                      style={{ color: "red" }}
                      onClick={() => setInfo3(!info3)}
                    >
                      {info3 ? "-" : "+"}
                    </a>
                  </h6>
                  {info3 && (
                    <p className="faqDesc">
                      This is super easy to make your first resume or cv by
                      using our website so fast and easy
                    </p>
                  )}
                </div>
                <div>
                  <h6>
                    What are you providing extra that can help find a job{" "}
                    <a
                      className="show"
                      style={{ color: "red" }}
                      onClick={() => setInfo4(!info4)}
                    >
                      {info4 ? "-" : "+"}
                    </a>
                  </h6>
                  {info4 && (
                    <p className="faqDesc">
                      This is super easy to make your first resume or cv by
                      using our website so fast and easy
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
