import React from 'react';
import Typical from 'react-typical';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Home.css';

const Home = () => {
  const str1 = 'Hello, I am Raja Umer Saghir. ';
  const str2 = 'I am engineer & full-stack developer.';
  return (
    <Card className="text-center bg-danger" id="home">
      <Card.Body className=" mt-5 mt-5 mb-5 pb-5">
        <Card.Title className=" mt-5 mt-5 mb-5 pb-5">
          <Typical
            className="Typical h1"
            loop={Infinity}
            wrapper="b"
            steps={[str1, 2000, str2, 2000]}
          />
        </Card.Title>

        <Button variant="primary">View my work</Button>
      </Card.Body>
    </Card>
  );
};

export default Home;
