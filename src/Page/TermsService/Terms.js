import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./terms.css";
const Terms = () => {
  return (
    <div className="mainn">
      <Navbar />
      <div className="mainRec">
        <div className="RecruitTop">
          <h1>Terms of Service</h1>
        </div>

        <div className="recruitmentInfo">
          <div className="termInfoTop">
            <small>
              We know the legislative framework that regulates the stay and work
              of foreign citizens in Poland. We assume responsibility for
              obtaining work permits and residence permits and we are
              contractually responsible for completing these formalities. We
              take care of everything that involves immigration services for
              future employees: (Including obtaining work permits, assist to
              apply for resident permits &amp; documentation. We communicate
              with the institutions of the state in order to obtain the
              documents necessary for immigration process, for legal stay and
              work in Poland.
            </small>
          </div>
          <div className="termImg">
            <img src="https://media.npr.org/assets/img/2020/03/04/accept_terms_wide-d65e4c6e4c775f09d49a6bf8b299cebe037f4459-s1100-c50.jpg" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
