import React, {useState} from "react";
import "./Navbar.css";
import logo from "./logo1.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <div className="navbar">
        <img src={logo} alt="DevNest" className="logo"/>
        <div className="navbar-right">
            <Link className="navbar-elements one" to="/">Home</Link>
            <Link className="navbar-elements" to="./about">About Us</Link>
            <a className="navbar-elements">Courses</a>
            <a className="navbar-elements">Sign up</a>
            <a className="navbar-elements two">Login</a>
        </div>
      </div>
    
  )
}

export default Navbar
