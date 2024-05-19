import React, {useState} from "react";
import "./Navbar.css";
import logo from "./logo1.png";

function Navbar() {
  return (
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
    
  )
}

export default Navbar
