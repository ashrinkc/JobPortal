import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <>
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
          {(toggleMenu || screenWidth > 500) && (
            <div className="navITEMS">
              <Link style={{ color: "white" }} to="/">
                <li className="items">Home</li>
              </Link>
              <Link style={{ color: "white" }} to="/jobs">
                <li className="items">Jobs</li>
              </Link>
              <Link style={{ color: "white" }} to="/recruitment">
                <li className="items">Recruitment</li>
              </Link>
              <Link style={{ color: "white" }} to="/blog">
                <li className="items">Blog</li>
              </Link>
              <Link style={{ color: "white" }} to="/about">
                <li className="items">About</li>
              </Link>
              <Link style={{ color: "white" }} to="/contact">
                <li className="items">Contact</li>
              </Link>
            </div>
          )}
          <button className="btn" onClick={toggleNav}>
            <p></p>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
