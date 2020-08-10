import React from 'react';
import Typical from 'react-typical';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import HomeBackground from '../../images/HomeBackground.jpg';
import './Home.css';

const Home = () => {
  const str1 = 'Hello, I am Raja Umer Saghir. ';
  const str2 = 'I am engineer & full-stack developer.';
  return (
    <Card className="text-center home-background" id="home">
      <Card.Body className=" mt-5 mt-5 mb-5 pb-5">
        <Card.Title className=" mt-5 mt-5 mb-3 pb-3">
          <Typical
            className="Typical h1"
            loop={Infinity}
            wrapper="b"
            steps={[str1, 2000, str2, 2000]}
          />
        </Card.Title>
        <article class="container w-75 mb-3 pb-3">
          Engineer & developer worked as assistant manager (R&D) at Papertale AB and Outso AB Sweden
          sustainable textile production and technology companies. Also have IT and computer
          programming skills. Fields of interests are R&D, web development, software development,
          embedded systems and information technology.
        </article>
        <Button variant="primary">View my work</Button>
      </Card.Body>
    </Card>
  );
};

export default Home;
