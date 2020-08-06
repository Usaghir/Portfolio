import React from 'react';
import './About.css';
import img from './Umer.jpg';

const About = () => {
  return (
    <div class="container d-flex justify-content-center">
      <div class="card center m-auto">
        <img class="card-img-top img m-auto" src={img} alt="Card image cap"></img>
        <div class="card-body m-auto">
          <blockquote class="blockquote mb-0">
            <p>
              {' '}
              Engineer & developer worked as assistant manager (R&D) at Papertale AB and Outso AB
              Sweden sustainable textile production and technology companies. Problem solver, team
              player with good social and interpersonal skills. Also have IT and computer
              programming skills. Fields of interests are R&D, web development, software
              development, embedded systems and information technology.
            </p>
          </blockquote>
        </div>
        <div class="row mt-5">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Work Experience</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Education</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
