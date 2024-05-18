import React, {useState} from "react";
import "./LandingPage.css";
import logo from "./logo1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    return (
    <div className="body-main">
      <div className="navbar">
        <img src={logo} alt="DevNest" className="logo"/>
        <div className="navbar-right">
            <a className="navbar-elements one">Home</a>
            <a className="navbar-elements">About Us</a>
            <a className="navbar-elements">Courses</a>
            <a className="navbar-elements">Sign up</a>
            <a className="navbar-elements two">Login</a>
        </div>
      </div>
      <div className="hero-section">
        <div className="features-container">
          <div className="students">
          <FontAwesomeIcon icon={faGraduationCap} className="student"/>
          <p className="numbers">20k+</p>
          <p className="numbers-header">STUDENTS</p>
          <p className="features-desc">Within a month of starting we have such a high number of students already with us</p>
          </div>
          <div className="students">
          <FontAwesomeIcon icon={faCode} className="student"/>
          <p className="numbers">180+</p>
          <p className="numbers-header">COURSES</p>
          <p className="features-desc">Explore 180+ expertly crafted courses to elevate your skills and become a full stack developer!</p>
          </div>
          <div className="students">
          <FontAwesomeIcon icon={faThumbsUp} className="student"/>
          <p className="numbers">1000+</p>
          <p className="numbers-header">RECRUITMENTS</p>
          <p className="features-desc">Join us and be one of the 2,500+ students who have landed their dream jobs!</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  export default Navbar;