import React from "react";
import box from "../style/imgs/box.svg";
import circle from "../style/imgs/circle.svg";
import shop from "../style/imgs/shop.svg";
import boost from "../style/imgs/boost.svg";
import "../style/service.css";
export default function Service () {
 return (
<section className="services">
      <div className="card-wrapper">
        <div className="decor left">
         <img src={box} alt="box-decor" />
        </div>

        <div className="service-card">
          <div className="icon shopify">
           <img src={shop} alt="shop-logo" />
          </div>

          <h3>Shopify Development</h3>

          <p>
            “ Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem. ”
          </p>

          <button>Read More</button>
        </div>
      </div>

      <div className="card-wrapper">
        <div className="decor right">
         <img src={circle} alt="circle-logo" />
        </div>

        <div className="service-card">
          <div className="icon marketing">
           <img src={boost} alt="boost-logo" />
          </div>

          <h3>Digital Marketing</h3>

          <p>
            “ Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem. ”
          </p>

          <button>Read More</button>
        </div>
      </div>
    </section>
 );
}