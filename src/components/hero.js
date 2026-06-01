import React from "react";
import hero from "../style/imgs/Group6356167.svg";
import one from "../style/imgs/Ellipse13.svg"
import two from "../style/imgs/Ellipse14.svg"
import three from "../style/imgs/Ellipse15.svg"
import star from "../style/imgs/Vector.svg"
import "../style/hero.css";
export default function Hero () {
 return (
<div className="Hero">
 <div className="left">
  <h3 className="logo-text">Create your <br/> Success <br/> <span>Business</span></h3>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
  <button className="explore-btn">Explore</button>
  <div className="review">
  <div className="review-img">
     <img src={one} className="img-1" alt="image-1" />
  <img src={two} className="img-2" alt="image-2" />
  <img src={three} className="img-3" alt="image-3" />
  </div>
  <div className="review-text">
   <h6>Customer Review <span><p><img src={star} className="star" alt="star" />4.8 <small>(5k reviews)</small></p></span></h6>
    
  </div>

  </div>

 </div>
 <div className="right">
  <img src={hero} className="hero-img" alt="hero" />
 </div>
</div>
 );
}