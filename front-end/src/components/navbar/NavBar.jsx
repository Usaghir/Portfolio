import React from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';
function NavBar() {
  function changeColor(e) {
    e.target.style.color = '#3aafa9';
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
            className="font-weight-bold"
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
            className="font-weight-bold"
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
            className="font-weight-bold"
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
            className="font-weight-bold"
          >
            PROJECTS
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
            className="font-weight-bold"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;