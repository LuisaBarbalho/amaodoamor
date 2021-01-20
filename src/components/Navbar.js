import React, { useState } from "react";
import "./css/Navbar.css";
import logo from '../assets/images/logo.png';
import instagram from '../assets/images/instagram.png';
import shop from '../assets/images/shop.png';
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                QUEM
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="products"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                O QUE
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="why"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                POR QUE
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="feedbacks"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                FEEDBACKS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                CONTATO
              </Link>
            </li>
          </ul>
          <img
            src={instagram}
            className="nav-insta"
            alt="Logo"
          />
          <img
            src={shop}
            className="nav-shop"
            alt="Logo"
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
