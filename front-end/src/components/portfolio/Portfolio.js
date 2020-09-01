import { Link } from 'react-scroll';
import React, { useState } from 'react';
import cv from '../../images/cv.png';
import defever from '../../images/defever.png';
import pizza from '../../images/pizza.png';
import Button from 'react-bootstrap/Button';
import './Portfolio.css';

function Portfolio() {
  const [state, setState] = useState({
    buttonColor: 'blue',
  });

  function changeBackground(e) {
    e.target.style.background = '#3aafa9';
  }

  function revertBackground(e) {
    e.target.style.background = 'transparent';
  }

  return (
    <section className="projects">
      <div className="content-wrap divider  pt-5 pb-5 container w-75" id="portfolio">
        <h1 className="mt-5  font-weight-bold">PROJECTS</h1>
        <div className="underline-bar mb-5"></div>

        <section className="project-item row justify-content-start">
          <img src={cv} alt="course thumbnail"></img>
          <div className=" text-left">
            <h3 className="font-bebas">Online CV </h3>
            <p>
              Topizza is a small online pizza store Demo application where the user can order pizzas
              and place in shopping cart. User can also add, subtract or remove the order items and
              see total cost and additional cost as well. User can place the form by filling the
              detail. User can see the history of the order in form of invoices.
            </p>

            <Button
              className="font-bebas pt-2"
              variant="dark"
              href="#"
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
              className="font-bebas pt-2 ml-2"
              variant="dark"
              href="#"
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
              Topizza is a small online pizza store Demo application where the user can order pizzas
              and place in shopping cart. User can also add, subtract or remove the order items and
              see total cost and additional cost as well. User can place the form by filling the
              detail. User can see the history of the order in form of invoices.
            </p>
            <Button
              className="font-bebas pt-2 "
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
              className="font-bebas pt-2 ml-2"
              variant="dark"
              href="#"
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
          <img src={pizza} alt="website thumbnail"></img>
          <div className=" text-left">
            <h3 className="font-bebas">Topizza</h3>
            <p>
              Topizza is a small online pizza store Demo application where the user can order pizzas
              and place in shopping cart. User can also add, subtract or remove the order items and
              see total cost and additional cost as well. User can place the form by filling the
              detail. User can see the history of the order in form of invoices.
            </p>
            <Button
              className="font-bebas pt-2"
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
              className="font-bebas pt-2 ml-2"
              variant="dark"
              href="#"
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

export default Portfolio;
