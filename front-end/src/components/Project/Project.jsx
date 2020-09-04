import React, { useState } from 'react';
import cv from '../../images/cv.png';
import defever from '../../images/defever.png';
import pizza from '../../images/pizza.png';
import Button from 'react-bootstrap/Button';
import './Project.css';

function Project() {
  const [state, setState] = useState({
    buttonColor: 'blue',
  });

  function changeBackground(e) {
    e.target.style.background = '#17252a';
    e.target.style.color = '#f7ffff';
  }

  function revertBackground(e) {
    e.target.style.background = 'transparent';
    e.target.style.color = '#17252a';
  }

  return (
    <section className="pt-5 projects">
      <div className="content-wrap divider pt-5 pb-5 container w-75" id="portfolio">
        <h1 className="font-weight-bold">PROJECTS</h1>
        <div className="underline-bar mb-5"></div>
        <section className="project-item pt-5 row">
          <img className=" " src={pizza} alt="website thumbnail"></img>
          <div className=" text-left">
            <h3 className="font-bebas ">Topizza</h3>
            <p>
              Topizza is a demo React online pizza delivery web application where uses can see
              general information, select items from menu and put in shopping cart, User can add,
              subtract quantities or remove items from shopping cart, User can see all costs in Euro
              and USD. User can see the history of orders as invoice by entering email.
            </p>
            <Button
              className="font-bebas pt-2 rounded-0"
              variant="dark"
              href="https://topizza.herokuapp.com/"
              target="_blank"
              style={{
                backgroundColor: 'transparent',
                color: '#17252a',
              }}
              onMouseOver={changeBackground}
              onMouseLeave={revertBackground}
            >
              website
            </Button>
            <Button
              className="font-bebas pt-2 ml-2 rounded-0"
              variant="dark"
              href="https://github.com/Usaghir/Pizza-Task"
              style={{
                backgroundColor: 'transparent',
                color: '#17252a',
              }}
              onMouseOver={changeBackground}
              onMouseLeave={revertBackground}
            >
              github
            </Button>
          </div>
        </section>
        <section className="project-item row justify-content-start">
          <img src={cv} alt="course thumbnail"></img>
          <div className=" text-left">
            <h3 className="font-bebas">Online CV </h3>
            <p>
              Online CV is a HTML, CSS based resume application. Application consist of profile page
              with summary and images. Application also have pages with educational detail and work
              experience history. Online resume also have skills and tools icons and also social
              media and contact icons in the footer page as well.
            </p>

            <Button
              className="font-bebas pt-2 rounded-0"
              variant="dark"
              href="https://usaghir.github.io/Online-CV/"
              style={{
                backgroundColor: 'transparent',
                color: '#17252a',
              }}
              onMouseOver={changeBackground}
              onMouseLeave={revertBackground}
            >
              website
            </Button>
            <Button
              className="font-bebas pt-2 ml-2 rounded-0"
              variant="dark"
              href="https://github.com/Usaghir/Online-CV"
              style={{
                backgroundColor: 'transparent',
                color: '#17252a',
              }}
              onMouseOver={changeBackground}
              onMouseLeave={revertBackground}
            >
              github
            </Button>
          </div>
        </section>

        <section className="project-item row">
          <img src={defever} alt="website thumbnail"></img>
          <div className=" text-left">
            <h3 className="font-bebas">Defever</h3>
            <p>
              DeFever is a social media forum application regarding COVID-19. It has login and
              registration. User can get latest news links and updated data as graphs regarding
              COVID-19 in Sweden and rest of the world. There is post and chat pages where users can
              post, comment, like and chat as well. users can update username and password.
            </p>
            <Button
              className="font-bebas pt-2 rounded-0"
              variant="dark"
              href="#"
              target="_blank"
              style={{
                backgroundColor: 'transparent',
                color: '#17252a',
              }}
              onMouseOver={changeBackground}
              onMouseLeave={revertBackground}
            >
              website
            </Button>
            <Button
              className="font-bebas pt-2 ml-2 rounded-0"
              variant="dark"
              href="https://github.com/Usaghir/defever"
              style={{
                backgroundColor: 'transparent',
                color: '#17252a',
              }}
              onMouseOver={changeBackground}
              onMouseLeave={revertBackground}
            >
              github
            </Button>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Project;
