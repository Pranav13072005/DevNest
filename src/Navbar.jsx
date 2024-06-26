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
            <Link className="navbar-elements" to="../about">About Us</Link>
            <Link className="navbar-elements" to="../courses">Courses</Link>
            <Link className="navbar-elements" to="../signup">Sign up</Link>
            <Link className="navbar-elements two" to="../login">Login</Link>
        </div>
      </div>
    
  )
}

export default Navbar
