import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import MainTopBar from "../MainTopBar/MainTopBar";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { t } = useTranslation();
  // const toggleNav = () => {
  //   setToggleMenu(!toggleMenu);
  // };
  // useEffect(() => {
  //   const changeWidth = () => {
  //     setScreenWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", changeWidth);
  // }, []);
  // useEffect(() => {
  //   const changeWidth = () => {
  //     setScreenWidth(window.innerWidth);
  //   };

  //   return () => {
  //     window.removeEventListener("resize", changeWidth);
  //   };
  // }, []);
  return (
    <>
      <MainTopBar />
      <nav className="navb">
        <div className="container">
          <div>
            {/* company logo */}
            <a className="navitm">
              <div className="companyLogo">
                <img src={logo} />
              </div>
            </a>
          </div>
          {/* {(toggleMenu || screenWidth > 500) && ( */}
          <div className="navITEMS">
            <Link style={{ color: "white" }} to="/">
              <li className="items">{t('HOME')}</li>
            </Link>
            <Link style={{ color: "white" }} to="/jobs">
              <li className="items">{t('JOBS')}</li>
            </Link>
            <Link style={{ color: "white" }} to="/recruitment">
              <li className="items">{t('RECRUITMENT')}</li>
            </Link>
            <Link style={{ color: "white" }} to="/blog">
              <li className="items">{t('BLOG')}</li>
            </Link>
            <Link style={{ color: "white" }} to="/about">
              <li className="items">{t('ABOUT')}</li>
            </Link>
            <Link style={{ color: "white" }} to="/contact">
              <li className="items">{t('CONTACT')}</li>
            </Link>
          </div>
          {/* )} */}
          {/* <button className="btn" onClick={toggleNav}>
            <p></p>
          </button> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
