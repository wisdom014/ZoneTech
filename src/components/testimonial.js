import React from "react";
import "../style/testimonial.css";
import hero from "../style/imgs/Group6356167.svg";

export default function Testimonial () {
 return (
  <section className="testimonial">
   <div className="testimonies">
    <h5>Case Studies <span>and Testimonials</span></h5>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
   </div>
   <div className="cases">
    <div className="say">
     <h6>What They Say ?</h6>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
    </div>
    <div className="speakers">
      <button className="arrow left">‹</button>

      <div className="testimonial-image">
        <img
          src={hero}
          alt="customer"
        />

        <div className="review-card">
          <p>
            “ Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy. ”
          </p>

          <div className="review-footer">
            <div>
              <h4>Sophia Isabel</h4>
              <span>Customer</span>
            </div>

            <div className="rating">
              ⭐⭐⭐⭐⭐
              <small>12 reviews at Yelp</small>
            </div>
          </div>
        </div>
      </div>

      <button className="arrow right">›</button>
    </div>
   </div>
  </section>
 )
}