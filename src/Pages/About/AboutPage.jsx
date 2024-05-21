import React from 'react';
import "./AboutPage.css";
import Navbar from "../../Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import ParticlesComponent from '../../components/Particles';

function AboutPage() {
  return (
    <div className='body'>
      <ParticlesComponent id="particles"/>
        <div className='Navbar'>
        <Navbar/>
        </div>
        <div className='section-1'>
          <div className='section-1-left'>
            <p className='section-1-left-header'>About <span className='section-1-left-header-us'>Us</span></p>
            <p className='section-1-left-text'>" Welcome to DevNest, your hub for innovative online courses designed to elevate your skills! Scroll down to explore our key features, or press "Our Story" to read about our journey. "</p>
          </div>
          <div className='section-1-right'>
            <div className='section-1-right-background'></div>
            <div className='content'>
            <p className='our-story-desc'>Founded on the principles of innovation, accessibility, and community, DevNest is not just a learning platform but a thriving ecosystem for aspiring tech professionals. Our courses are meticulously crafted by industry experts to...</p>
            <div className='button'>
            <button className='our-story'>View Our Story  <FontAwesomeIcon icon={faArrowRight} className="arrow"/></button>
            </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default AboutPage;
