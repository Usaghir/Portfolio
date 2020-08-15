import React from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';
function NavBar() {
  function changeColor(e) {
    e.target.style.color = '#83A5B0';
  }

  function revertColor(e) {
    e.target.style.color = '#ffffff';
  }
  return (
    <nav
      class="navbar navbar-expand-lg  bot-border sticky"
      style={{ backgroundColor: '#17252a', color: '#feffff' }}
    >
      <div class="collapse  navbar-collapse " id="navbar">
        <ul class="navbar-nav">
          <li class="nav-link navi">
            <Link
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onMouseOver={changeColor}
              onMouseLeave={revertColor}
            >
              HOME
            </Link>
          </li>
          <li class="nav-link navi">
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onMouseOver={changeColor}
              onMouseLeave={revertColor}
            >
              ABOUT
            </Link>
          </li>
          <li class="nav-link navi">
            <Link
              to="skills"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onMouseOver={changeColor}
              onMouseLeave={revertColor}
            >
              SKILLS
            </Link>
          </li>
          <li class="nav-link navi">
            <Link
              to="portfolio"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onMouseOver={changeColor}
              onMouseLeave={revertColor}
            >
              PORTFOLIO
            </Link>
          </li>
          <li class="nav-link navi">
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onMouseOver={changeColor}
              onMouseLeave={revertColor}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
