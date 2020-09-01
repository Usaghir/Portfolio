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
      className="navbar navbar-expand bot-border sticky"
      style={{ backgroundColor: '#17252a', color: '#feffff' }}
    >
      <ul className="navbar-nav" id="navbar">
        <li className="nav-link navi">
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
        <li className="nav-link navi">
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
        <li className="nav-link navi">
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
        <li className="nav-link navi">
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
        <li className="nav-link navi">
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
    </nav>
  );
}

export default NavBar;
