import React, { useState } from 'react';
import Typical from 'react-typical';
import { Link } from 'react-scroll';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import umer from '../../images/umer.jpg';
import cv from './CV.pdf';
import { Document, Page } from 'react-pdf';

import './Home.css';

const Home = () => {
  const [state, setState] = useState({
    buttonColor: 'blue',
  });

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function renderPdf() {
    return (
      <div>
        <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }

  function changeBackground(e) {
    e.target.style.background = '#3aafa9';
  }

  function revertBackground(e) {
    e.target.style.background = 'transparent';
  }

  const str1 = 'Hello, I am Raja Umer Saghir. ';
  const str2 = 'I am engineer & full-stack developer.';
  return (
    <Card className="text-center home-background " id="home">
      <Card.Body className=" top-gap">
        <img className="image" src={umer} alt="Profile Picture"></img>
        <Card.Title
          className=" mt-5 mt-5 mb-3 pb-3"
          style={{
            color: '#feffff',
          }}
        >
          <Typical
            className="Typical h1"
            loop={Infinity}
            wrapper="b"
            steps={[str1, 2000, str2, 2000]}
          />{' '}
        </Card.Title>{' '}
        <article
          className="container w-75 mb-3 pb-3"
          style={{
            color: '#feffff',
          }}
        >
          Worked as Project Engineer(R & D) at{' '}
          <a
            href="https://papertale.org"
            target="_blank"
            style={{
              color: '#83A5B0',
            }}
          >
            Papertale AB{' '}
          </a>{' '}
          and{' '}
          <a
            href="https://outso.se"
            target="_blank"
            style={{
              color: '#83A5B0',
            }}
          >
            Outso AB{' '}
          </a>{' '}
          Sweden sustainable textile production and technology companies.Competent computer
          programming and web development skills.Fields of interests are R & D, full stack web
          development, software development in field of information technology.{' '}
        </article>{' '}
        <Link
          to="skills"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{
            color: '#feffff',
          }}
          className="mr-4"
        >
          <Button
            className="font-bebas pt-2"
            variant="light"
            style={{
              backgroundColor: 'transparent',
              color: '#feffff',
            }}
            onMouseOver={changeBackground}
            onMouseLeave={revertBackground}
          >
            view my work
          </Button>
        </Link>
        <Button
          className="font-bebas pt-2"
          variant="light"
          style={{
            backgroundColor: 'transparent',
            color: '#feffff',
          }}
        >
          <a href={cv} target="_blank">
            Download CV
          </a>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Home;
