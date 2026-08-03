import React, { useState } from "react";
import "../style/navBar.css";
import arrow from "../style/imgs/arrowup.svg"

export default function NavBar () {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 return (
 <nav className="navbar">
 <div className="logo">
 <img className="logo-arrow" src={arrow} alt="arrow-up" />
 <h5 className="logo-text">Zone<span>Tech</span></h5>
 </div>
  <button
   type="button"
   className={`menu-btn${isMenuOpen ? " open" : ""}`}
   onClick={() => setIsMenuOpen((prev) => !prev)}
   aria-expanded={isMenuOpen}
   aria-controls="navbar-links"
   aria-label={isMenuOpen ? "Close menu" : "Open menu"}
  >
   <span className="menu-btn-line"></span>
   <span className="menu-btn-line"></span>
   <span className="menu-btn-line"></span>
  </button>
  <ul id="navbar-links" className={`nav-links${isMenuOpen ? " open" : ""}`}>
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