import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import cv from './CV.pdf';
import CanvasBackground from './CanvasBackground';
import './Home.css';

const Home = () => {
  function changeBackground(e) {
    e.target.style.background = '#17252a';
  }

  function revertBackground(e) {
    e.target.style.background = 'transparent';
  }

  const str1 = 'Hello, I am Raja Umer ';
  const str2 = 'I am full-stack Engineer';
  return (
    <div
      className='home-background'
      id='home'
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <CanvasBackground /> {/* Canvas background component */}
      <Card
        className='text-center pt-5'
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
      >
        <Card.Body className='top-gap'>
          <div className='hex-comp'>
            <div className='inside-comp'>
              <div className='img-comp'></div>
            </div>
          </div>
          <Card.Title className='pt-5 mb-3 pb-3' style={{ color: '#feffff' }}>
            <TypeAnimation
              sequence={[str1, 1000, str2, 1000, () => {}]}
              wrapper='span'
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: '2em',
                display: 'inline-block',
                fontFamily: 'Courier New',
              }}
            />
          </Card.Title>
          <Link
            to='portfolio'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-70}
            duration={5000}
            style={{ color: '#feffff' }}
          >
            <Button
              className='font-bebas pt-2 rounded-0 mr-3'
              variant='light'
              style={{ backgroundColor: 'transparent', color: '#feffff' }}
              onMouseOver={changeBackground}
              onMouseLeave={revertBackground}
            >
              Some of my work
            </Button>
          </Link>
          <Button
            className='font-bebas pt-2 rounded-0'
            variant='light'
            style={{ backgroundColor: 'transparent' }}
          >
            <a
              href={cv}
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: '#feffff', textDecoration: 'none' }}
            >
              Open Resume
            </a>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
