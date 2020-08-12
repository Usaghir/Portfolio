import React from 'react';
import { Link } from 'react-scroll';

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-fixed-top" style={{ backgroundColor: '#17252a' }}>
      <div class="collapse  navbar-collapse" id="navbar">
        <ul class="navbar-nav">
          <li class="nav-link">
            <Link
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ color: '#ffffff' }}
            >
              Home
            </Link>
          </li>
          <li class="nav-link">
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ color: '#ffffff' }}
            >
              About
            </Link>
          </li>
          <li class="nav-link">
            <Link
              to="skills"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ color: '#ffffff' }}
            >
              Skills
            </Link>
          </li>
          <li class="nav-link">
            <Link
              to="portfolio"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ color: '#ffffff' }}
            >
              Portfolio
            </Link>
          </li>
          <li class="nav-link">
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ color: '#ffffff' }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
