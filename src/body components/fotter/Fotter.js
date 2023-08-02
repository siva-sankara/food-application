import React from "react";
import { Link } from "react-router-dom";
import "./Fotter.css";
import img from "../navbar/nav-logo.svg";
import {
  AiFillInstagram,
  AiOutlineFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";
const navlist = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Order",
    path: "/order",
  },
  {
    name: "Company",
    path: "/aboutus",
  },
  {
    name: "FAQ",
    path: "/frequently-question",
  },
];
const Fotter = () => {
  return (
    <div className="fottermain">
      <div className="fotter">
        <div className="f-link-1">
          <img src={img} className="logo" />
          <p>Takeaway & Delivery template for small - medium businesses.</p>
        </div>
        
        <div className="fotterlinks">
        <h3>Company</h3>{navlist.map((eachobj) => {
          return(
            <ul>
              <li><Link to={eachobj.path}>{eachobj.name}</Link></li>
            </ul>
          )
        })}</div>
        <div className="fotterlinks">
          <ul>
            <li>
              <h5>TEMPLATE</h5>
            </li>
            <li>
              <Link className="f-link" to="/">
                Style Guide
              </Link>
            </li>
            <li>
              <Link className="f-link" to="/">
                Changelog
              </Link>
            </li>
            <li>
              <Link className="f-link" to="/">
                Licence
              </Link>
            </li>
            <li>
              <Link className="f-link" to="/">
                Webflow University
              </Link>
            </li>
          </ul>
        </div>
        <div className="fotterlinks">
          <ul>
            <li>
              <h5>FLOWBASE</h5>
            </li>
            <li>
              <Link className="f-link" to="/">
                More Cloneables
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="hrclass"></hr>
        <div className="socialmedialink">
          <div>
            <p>
              Built by <Link> Flowbase .</Link> Powered by<Link>Webflow</Link>
            </p>
          </div>
          <div className="medialinks">
            <ul>
              <li>
                <Link>
                  <AiFillInstagram className="socialmedia" />
                </Link>
              </li>
              <li>
                <Link>
                  <AiOutlineFacebook className="socialmedia" />
                </Link>
              </li>
              <li>
                <Link>
                  <FiYoutube className="socialmedia" />
                </Link>
              </li>
              <li>
                <Link>
                  <AiFillTwitterSquare className="socialmedia" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
