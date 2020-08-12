import React from 'react';
import Typical from 'react-typical';
import { Link } from 'react-scroll';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import umer from '../../images/umer.jpg';

import './Home.css';

const Home = () => {
  const str1 = 'Hello, I am Raja Umer Saghir. ';
  const str2 = 'I am engineer & full-stack developer.';
  return (
    <Card className="text-center home-background " id="home">
      <Card.Body className=" m-5 p-5">
        <img className="image" src={umer} alt="Profile Picture"></img>
        <Card.Title className=" mt-5 mt-5 mb-3 pb-3" style={{ color: '#feffff' }}>
          <Typical
            className="Typical h1"
            loop={Infinity}
            wrapper="b"
            steps={[str1, 2000, str2, 2000]}
          />
        </Card.Title>
        <article class="container w-75 mb-3 pb-3" style={{ color: '#feffff' }}>
          Engineer & developer worked as assistant manager (R&D) at Papertale AB and Outso AB Sweden
          sustainable textile production and technology companies. Also have IT and computer
          programming skills. Fields of interests are R&D, web development, software development,
          embedded systems and information technology.
        </article>
        <Link
          to="skills"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ color: '#feffff' }}
        >
          <Button variant="light" style={{ backgroundColor: 'transparent', color: '#feffff' }}>
            View my work
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Home;
