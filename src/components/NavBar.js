import React, { Component } from "react"
import logo from "../resources/logo.png"
import { animateScroll as scroll } from "react-scroll"
import { Link } from "gatsby"

import LogoIcon from "./logo"

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop()
  }

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <Link to="/">
            <div className="logo">
              <LogoIcon></LogoIcon>
              Gliane Optical
            </div>
          </Link>
          <ul className="nav-items">
            <li className="nav-item">
              <Link to="/eye-care-services" className="nav-item">
                Eye Care Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/laboratory" className="nav-item">
                Laboratory
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" href="/about-us" className="active">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" href="/contact-us" className="nav-item">
                Contact Us
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 2
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 3
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 4
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 5
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    )
  }
}
