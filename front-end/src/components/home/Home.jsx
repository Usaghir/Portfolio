import React, { useState } from 'react';
import Typical from 'react-typical';
import { Link } from 'react-scroll';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Home.css';

const Home = () => {
  const [state, setState] = useState({
    buttonColor: 'blue',
  });

  function openPdf() {
    window.open('http://localhost:5000/files/CV.pdf', '_blank');
  }

  function changeBackground(e) {
    e.target.style.background = '#17252a';
  }

  function revertBackground(e) {
    e.target.style.background = 'transparent';
  }

  const str1 = 'Hello, I am Raja Umer Saghir. ';
  const str2 = 'I am engineer & full-stack developer.';
  return (
    <Card className="text-center home-background pt-5" id="home">
      <Card.Body className=" top-gap">
        <div className=" hex-comp ">
          <div className=" inside-comp">
            <div className="img-comp"></div>
          </div>
        </div>
        <Card.Title
          className=" pt-5 mb-3 pb-3"
          style={{
            color: '#feffff',
          }}
        >
          <Typical
            className="Typical h1 font-courier"
            loop={Infinity}
            wrapper="b"
            steps={[str1, 2000, str2, 2000]}
          />{' '}
        </Card.Title>{' '}
        <Link
          to="portfolio"
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
            className="font-bebas pt-2 rounded-0"
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
          className="font-bebas pt-2 rounded-0"
          variant="light"
          style={{
            backgroundColor: 'transparent',
            color: '#feffff',
          }}
          onMouseOver={changeBackground}
          onMouseLeave={revertBackground}
          onClick={openPdf}
        >
          Open Resume
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Home;
