import React from "react";
import "./Mainpage.css";
import trastpliot from "./trustpilot.svg";
import mainimg1 from "./main-img1.png";
import row2img from "./row2img.png";
import howitwork1 from "./howitwork1.png";
import howitwork2 from "./howitwork2.png";
import howitwork3 from "./howitwork3.png";
import row4 from "./row4img.png";
import row5 from "./row5.png";
import row6 from "./row61.png";
import Banner from "../banner/Banner";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import food from "../fooddata";
import Fotter from "../fotter/Fotter";
import Order from "../../pages/Order";
const howitwork = [
  {
    url: howitwork1,
    title: "Adapt your menu items",
    desc: "Easily adapt your menu using the webflow CMS and allow customers to browse your items.",
  },
  {
    url: howitwork2,
    title: "Accept online orders & takeout",
    desc: "Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.",
  },
  {
    url: howitwork3,
    title: "Manage delivery or takeout",
    desc: "Manage your own logistics and take orders simply through the ecommerce system.",
  },
];

const MainPage = () => {
  return (
    <div className="mainpage">
      <div className="row1">
        <div className="main-row1">
          <div className="main1-content">
            <p className="head">
              Beautiful food & takeaway,<span> delivered </span>to your door.
            </p>
            <p className="decs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500.
            </p>
            <div className="palce-order">
              <Link to="/order">Place Order</Link>
            </div>
            <div>
              <img src={trastpliot} />
              <p className="desc2">
                <span>4.8 out of 5</span> 5 based on 2000+ reviews
              </p>
            </div>
          </div>
          <div className="main1-images">
            <img className="r-1-img" src={mainimg1} />
          </div>
        </div>
      </div>

      <div className="row2">
        <div className="main-row1 ">
          <div className="main1-content row2">
            <span className="head">The home of fresh products</span>
            <p className="decs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500.
            </p>
            <div className="palce-order">
              <Link to="/aboutus">Learn about us</Link>
            </div>
          </div>
          <div className="main1-images">
            <img className="r-1-img" src={row2img} />
          </div>
        </div>
      </div>

      <div className="row3">
        <div className="howitworkhead">
          <span className="head">How it works.</span>
        </div>
        <div className="howitwork">
          {howitwork.map((eachobj) => {
            return (
              <div className="eachwork">
                <img className="workimg" src={eachobj.url} />
                <h2>{eachobj.title}</h2>
                <p className="decs">{eachobj.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="row1">
        <div className="main-row4">
          <span className="head">Browse our menu</span>
        </div>
        <div className="buttontap">
          <button className="serchbutton" >Full Menu</button>
          <button className="serchbutton">Burgers </button>
          <button className="serchbutton">Sides</button>
          <button className="serchbutton">Drinks</button>
        </div>
        <div className="cardslist">
          <div className="cards">
            {food.map((eachobj) => {
              return (
                <div className="card">
                  <img className="card-img" src={eachobj.thumbnail} />
                  <h3>{eachobj.description}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}.
      <Order />

      <div className="row2">
        <div className="main-row1">
          <div className="main1-images">
            <img className="row4img" src={row4} />
          </div>
          <div className="main1-content row2">
            <span className="head">Order online with our simple checkout.</span>
            <p className="decs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500.
            </p>
            <div className="palce-order">
              {" "}
              <Link to="/frequently-question">See our FAQ</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row2">
        <div className="main-row1 ">
          <div className="main1-content row2">
            <span className="head">
              Call our store and takeaway when it suits you best.
            </span>
            <p className="decs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500.
            </p>
            <div className="palce-order">ph.+61 233 2333</div>
          </div>
          <div className="main1-images">
            <img className="r-1-img" src={row5} />
          </div>
        </div>
      </div>

      <div className="row2 row66">
        <div className="main-row1">
          <div className="main1-images">
            <img className="row4img r6img" src={row6} />
          </div>
          <div className="main1-content row6">
            <span className="head r6">
              <b className="sup">Support</b> good food and local business.
            </span>
            <div className="palce-order r6btn"><Link to='/frequently-question'> See our FAQ</Link></div>
          </div>
        </div>
      </div>
     <Fotter />
    </div>
  );
};

export default MainPage;
