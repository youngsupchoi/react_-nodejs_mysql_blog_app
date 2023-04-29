import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            ART
          </Link>
          <Link className="link" to="/?cat=SCIENCE">
            SCIENCE
          </Link>
          <Link className="link" to="/?cat=TECHNOLOGY">
            TECHNOLOGY
          </Link>
          <Link className="link" to="/?cat=CINEMA">
            CINEMA
          </Link>
          <Link className="link" to="/?cat=DESIGN">
            DESIGN
          </Link>
          <Link className="link" to="/?cat=FOOD">
            FOOD
          </Link>

          <span>John</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
