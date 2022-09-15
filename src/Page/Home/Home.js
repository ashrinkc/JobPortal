import React, { useState } from "react";
import "./home.css";
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
import log from "../../Images/log.png";
import SearchBar from "../../components/SearchBar/SearchBar";
import MainTopBar from "../../components/MainTopBar/MainTopBar";
import { useNavigate } from "react-router-dom";
import delhi from "../../Images/delhi.jpg";
import pland from "../../Images/pLandMark.jpg";
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
  return (
    <div className="mainn">
      {/* <MainTopBar /> */}
      <Navbar />
      <div className="homeContainer">
        <div className="homeContent">
          <div className="homeInfo">
            <h1>
              FIND YOUR JOB IN <a>POLAND</a>
            </h1>

            <small>
              Our world class services help you land your dream job. Join Us and
              secure your future.
            </small>
            <button
              onClick={() => navigate("/contact") || window.scrollTo(0, 0)}
            >
              Contact Us
            </button>
          </div>
          <div className="homeImg">
            {/* <img src="https://www.icegif.com/wp-content/uploads/reading-icegif-16.gif" /> */}
            <img src={human} />
          </div>
        </div>
        <div className="mainSupCom">
          <h1>Trusted by 100+ companies in Poland</h1>
          <div className="supComContainer">
            <div>
              <img className="supCom" src={log} />
            </div>
            <div>
              <img className="supCom" src={supCom} />
            </div>
            {/* <div>
              <img className="supCom" src={log} />
            </div>
            <div>
              <img className="supCom" src={log} />
            </div>
            <div>
              <img className="supCom" src={log} />
            </div>
            <div>
              <img className="supCom" src={log} />
            </div> */}
          </div>
        </div>
        {/* <hr className="hrr" /> */}
        <div className="topSearch">
          {/* <div className="dreamJob">
            <input placeholder="find your dream job" />
            <button>Search</button>
          </div> */}
          <div>
            <h1>Find the right job.</h1>
          </div>
          {/* <SearchBar /> */}
          {/* <h2>Top Searches</h2> */}
          <div className="sData">{data}</div>
          <div
            onClick={() => navigate("/jobs") || window.scrollTo(0, 0)}
            className="viewJobs"
          >
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
              <a>Here & Anywhere.</a>
              <button
                onClick={() => navigate("/contact") || window.scrollTo(0, 0)}
              >
                Apply Now
              </button>
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
                {/* <div className="tasknum">
                  <div>1</div>
                  <div>3</div>
                </div> */}
                <div className="taskInfo">
                  <div className="taskInfoIn">
                    <div className="tasknum">1</div>
                    <div className="taskDet">
                      <h1>Submit your CV & Document</h1>
                      <small>
                        When applying for your Temporary Skill Shortage visa
                        (TSS visa) subclass 482 you will need to write and
                        submit a copy of your CV (also known as resume) as part
                        of the application. It’s therefore very important that
                        you make sure your CV contains all the facts that prove
                        to the case officer assessing your application that you
                        are eligible for the visa.
                      </small>
                    </div>
                  </div>
                  <div className="taskInfoIn">
                    <div className="tasknum">3</div>
                    <div className="taskDet">
                      <h1>Pay the non-refundable application fee</h1>
                      <small>
                        You will need your SEVIS ID and the program number
                        (P-3-05381). Complete this process to pay for your visa
                        appointment. If you can't do it all at once, you can
                        save and come back! A visa appointment costs 160 USD.
                        This fee is in addition to the sponsorship fee paid to
                        Inter-Exchange.
                      </small>
                    </div>
                  </div>
                </div>
                <div className="taskInfo">
                  <div className="taskInfoIn">
                    <div className="tasknum">2</div>
                    <div className="taskDet">
                      <h1>Find the embassy nearby </h1>
                      <small>
                        Visit the Poland Embassy website and select your nearest
                        country and embassy! Most visa applicants will need to
                        schedule a visa interview, but some applicants may be
                        eligible for a visa extension. Embassy or consulate
                        information may include local specific instructions on
                        how to schedule an interview, how to submit a visa
                        application.
                      </small>
                    </div>
                  </div>
                  <div className="taskInfoIn">
                    <div className="tasknum">4</div>
                    <div className="taskDet">
                      <h1>Schedule your visa appointment</h1>
                      <small>
                        During the interview, applicants must demonstrate to the
                        consular officer that they have binding ties to a
                        foreign residence they do not intend to relinquish and
                        to come to the United States temporarily. It is not
                        possible to determine the exact form of proof submitted,
                        as the circumstances of applicants vary widely.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="tasks mobTask">
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
              </div> */}
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
          <div className="careerTipsContainer">
            <div>
              <h1>Quick career tips</h1>
              <div className="careerTop">
                <h5>Some Blogs to help you.</h5>
              </div>
            </div>
            <div className="careerBlogs">
              <div className="careerInfo" onClick={() => navigate("/blog")}>
                <img src={delhi} />
                <div>
                  <h6>Signs that your job is toxic</h6>
                  <small>
                    Now you can apply for Working Visa from India & Nepal.{" "}
                  </small>
                </div>
              </div>
              <div className="careerInfo" onClick={() => navigate("/blog")}>
                <img src={pland} />
                <div>
                  <h6>Professionalism in the Workplace</h6>
                  <small>
                    Now you can apply for Working Visa from India & Nepal.{" "}
                  </small>
                </div>
              </div>
              <div className="careerInfo" onClick={() => navigate("/blog")}>
                <img src={delhi} />
                <div>
                  <h6>How to apply for Embassy in Delhi?</h6>
                  <small>
                    Now you can apply for Working Visa from India & Nepal.{" "}
                  </small>
                </div>
              </div>
            </div>
            <div className="careerViewAll">
              <h6 onClick={() => navigate("/blog") || window.scrollTo(0, 0)}>
                View More
              </h6>
            </div>
          </div>
          {/* <div className="faqContainer">
            <div className="faq">
              <div>
                <img src={woman} />
              </div>
              <div className="faqInfo">
                <div>
                  <div className="faqInfoone">
                    <small style={{ color: "rgb(236,27,52)" }}>
                      KNOW YOUR ANSWER
                    </small>
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
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
