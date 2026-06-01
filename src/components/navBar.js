import React from "react";
import "../style/navBar.css";
import arrow from "../style/imgs/arrowup.svg"

export default function NavBar () {
 return (
 <nav className="navbar">
 <div className="logo">
 <img className="logo-arrow" src={arrow} alt="arrow-up" />
 <h5 className="logo-text">Zone<span>Tech</span></h5>
 </div>
  <ul className="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/about">Services</a></li>
    <li><a href="/contact">How We Work</a></li>
    <li><a href="/contact">Our Team</a></li>
    <li><a href="/contact">Careers</a></li>
    <li><a href="/contact">Blog</a></li>
  </ul>
 </nav>
 );
}