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
        
      THIS IS THE ABOUT PAGE
    </div>
  )
}

export default AboutPage;
