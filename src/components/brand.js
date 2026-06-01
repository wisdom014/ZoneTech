import React from "react";
import left from "../style/imgs/leftarrow.svg";
import right from "../style/imgs/rightarrow.svg";
import google from "../style/imgs/google.svg";
import netflix from "../style/imgs/netflix.svg";
import airbnb from "../style/imgs/airbnb.svg";
import amazon from "../style/imgs/amazon.svg";
import facebook from "../style/imgs/facebook.svg";
import grab from "../style/imgs/grab.svg";
import "../style/brand.css";
export default function Brand () {
 return (
  <div className="brand">
   <h5><img src={left} className="left-arrow" alt="left" /> Trusted by <span> 100+ Companies</span> Worldwide <img src={right} className="right-arrow" alt="right" /></h5>
   <div className="brand-img">
    <img src={google} alt="brand" />
    <img src={netflix} alt="brand" />
    <img src={airbnb} alt="brand" />
    <img src={amazon} alt="brand" />
    <img src={facebook} alt="brand" />
    <img src={grab} alt="brand" />
   </div>
  </div>
 );
}