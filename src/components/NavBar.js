import React, { Component } from 'react';
import logo from '../resources/logo.png';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'gatsby';

import LogoIcon from './logo';
import './nav.css';

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    const { location } = this.props;

    const path =
      location && location.pathname ? location.pathname.toLowerCase() : '/';

    return (
      <>
        <nav className="nav" id="navbar">
          <div className="nav-content">
            <Link to="/">
              <div className="logo">
                <LogoIcon></LogoIcon>
              </div>
            </Link>
            <ul className="nav-items">
              <li className="nav-item">
                <Link
                  to="/eye-care-services"
                  className={
                    path.includes('/eye-care-services')
                      ? 'nav-item selected'
                      : 'nav-item'
                  }
                >
                  Eye Care Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/laboratory"
                  className={
                    path.includes('/laboratory')
                      ? 'nav-item selected'
                      : 'nav-item'
                  }
                >
                  Laboratory
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about-us"
                  href="/about-us"
                  className={
                    path.includes('/about-us')
                      ? 'nav-item selected'
                      : 'nav-item'
                  }
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact-us"
                  href="/contact-us"
                  className={
                    path.includes('/contact-us')
                      ? 'nav-item selected'
                      : 'nav-item'
                  }
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="menu">
          <input type="checkbox" id="drawer-toggle" name="drawer-toggle" />
          <label for="drawer-toggle" id="drawer-toggle-label"></label>
          <header>
            <div
              style={{
                width: '90%',
                flex: ' 0 auto',
                textAlign: 'center',
                fontSize: '1.5rem'
              }}
            >
              Gliane Optical
            </div>
            <LogoIcon width="3rem" height="1.5rem"></LogoIcon>
          </header>
          <nav id="drawer">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/eye-care-services">Eye Care Services</Link>
              </li>
              <li>
                <Link to="/laboratory">Laboratory</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}
