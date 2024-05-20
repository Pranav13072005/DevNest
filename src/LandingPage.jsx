import React, {useState} from "react";
import "./LandingPage.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import Navbar from './Navbar';
function LandingPage() {
    return (
    <div className="body-main">
      <Navbar/>
      <div className="hero-section">
        <div className="hero-header">
          <p className="hero-header hone">Launch your new career with a professional certificate!</p>
          <p className="hero-header htwo">7-day free trial | Starting at $49 per month | Less than 6 months at your own pace</p>
          <button className="hero-header-button">Explore Courses <FontAwesomeIcon icon={faArrowRight} className="arrow"/></button>
        </div>
        <div className="features-container">
          <div className="students">
          <FontAwesomeIcon icon={faGraduationCap} className="student"/>
          <p className="numbers"><CountUp start={0} end={200} duration = {2} useEasing={true}/>k+</p>
          <p className="numbers-header">STUDENTS</p>
          <p className="features-desc">Join a thriving community of over 200,000 aspiring developers!</p>
          </div>
          <div className="students">
          <FontAwesomeIcon icon={faCode} className="student"/>
          <p className="numbers"><CountUp start={0} end={180} duration = {2}/>+</p>
          <p className="numbers-header">COURSES</p>
          <p className="features-desc">Explore 180+ expertly crafted courses to elevate your skills and become a full stack developer!</p>
          </div>
          <div className="students">
          <FontAwesomeIcon icon={faThumbsUp} className="student"/>
          <p className="numbers"><CountUp start={0} end={1000} duration={1.5}/>+</p>
          <p className="numbers-header">RECRUITMENTS</p>
          <p className="features-desc">Join us and be one of the 2,500+ students who have landed their dream jobs!</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  export default LandingPage;