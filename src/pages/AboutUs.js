import React from "react";
import row4 from "./orrderimg1.png";
import { Link } from "react-router-dom";
import Fotter from "../body components/fotter/Fotter";
const AboutUs = () => {
  return (
    <div>
      <div className="orderbg">
      <div className="order">
        <div className="orderpage">
          <h1>
            Our company focuses on <span> food and people.</span>
          </h1>
        </div>
        <div className="row2">
          <div className="main-row1">
            <div className="main1-content row2">
              <span className="head">The home of fresh products</span>
              <p className="decs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500.
              </p>
              <div className="palce-order">
                <Link to="/frequently-question">See our FAQ</Link>
              </div>
            </div>
            <div className="main1-images">
              <img className="row4img" src={row4} />
            </div>
          </div>
        </div>
        <Fotter />
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
