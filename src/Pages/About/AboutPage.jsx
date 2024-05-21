import React from 'react';
import "./AboutPage.css";
import Navbar from "../../Navbar";

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
            <p className='our-story-desc'></p>
            <button className='our-story'>Our Story</button>
          </div>
        </div>
    </div>
  )
}

export default AboutPage;
