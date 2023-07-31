import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import cv from "./CV.pdf";
import "./Home.css";

function Home() {
  function changeBackground(e) {
    e.target.style.background = "#17252a";
  }

  function revertBackground(e) {
    e.target.style.background = "transparent";
  }

  const str1 = "Hello, I am Raja Umer ";
  const str2 = "I am web developer";
  return (
    <Card className="text-center home-background pt-5" id="home">
      <Card.Body className=" top-gap">
        <div className=" hex-comp">
          <div className=" inside-comp">
            <div className="img-comp" />
          </div>
        </div>
        <Card.Title
          className=" pt-5 mb-3 pb-3"
          style={{
            color: "#feffff",
          }}
        >
          <TypeAnimation
            sequence={[
              str1, // Types 'One'
              1000, // Waits 1s
              str2, // Deletes 'One' and types 'Two'
              1000, // Waits 2s
              // 'Two Three', // Types 'Three' without deleting 'Two'
              () => {
                // Place optional callbacks anywhere in the array
              },
            ]}
            wrapper="span"
            cursor
            repeat={Infinity}
            style={{
              fontSize: "2em",
              display: "inline-block",
              fontFamily: "Courier New",
            }}
          />
        </Card.Title>{" "}
        <Link
          to="portfolio"
          activeClass="active"
          spy
          smooth
          offset={-70}
          duration={500}
          style={{
            color: "#feffff",
          }}
          className="mr-4"
        >
          <Button
            className="font-bebas pt-2 rounded-0"
            variant="light"
            style={{
              backgroundColor: "transparent",
              color: "#feffff",
            }}
            onMouseOver={() => changeBackground()}
            onMouseLeave={() => revertBackground()}
          >
            view my work
          </Button>
        </Link>
        <Button
          className="font-bebas pt-2 rounded-0"
          variant="light"
          style={{
            backgroundColor: "transparent",
          }}
          onMouseOver={() => changeBackground()}
          onMouseLeave={() => revertBackground()}
        >
          <a
            style={{
              color: "#feffff",
              backgroundColor: "transparent",
            }}
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Resume
          </a>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Home;
