import React from 'react';
import cv from '../../images/cv.jpeg';
import defever from '../../images/defever.jpeg';
import pizza from '../../images/pizza.jpeg';
import Button from 'react-bootstrap/Button';
import './Project.css';

function Project() {
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
        <div className="underline-dark-bar mb-5"></div>
        <div className="underline-bar mb-5"></div>
        <section className="project-item row">
          <img style={{ maxHeight: '200px' }} src={defever} alt="website thumbnail"></img>
          <div className=" text-left">
            <h3 className="font-bebas">Defever</h3>
            <p>
              Defever is a forum application regarding to stay in contact during COVID-19. It has
              login and registration. Users can view Covid-19 cases update chart of Sweden and rest
              of the world. It also have post page for creating post, comment, like and delete. It
              also have chat room for group. Users can update profile as well.
            </p>
            <Button
              className="font-bebas pt-2 rounded-0"
              variant="dark"
              href="https://defever.herokuapp.com/"
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
        <section className="project-item pt-5 row">
          <img style={{ maxHeight: '200px' }} src={pizza} alt="website thumbnail"></img>
          <div className=" text-left">
            <h3 className="font-bebas ">Topizza</h3>
            <p>
              Topizza is a demo Reactjs, Express, PostgreSQL based online pizza delivery web
              application. Users can choose items from menu and add in shopping cart. Users can add,
              subtract quantities or remove items from shopping cart. Users can see costs in Euro
              and USD. Users can see history of orders as invoice by providing email.
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
          <img style={{ maxHeight: '200px' }} src={cv} alt="course thumbnail"></img>
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
      </div>
    </section>
  );
}

export default Project;
