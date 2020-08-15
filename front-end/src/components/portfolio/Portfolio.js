import React from 'react';
import { Link } from 'react-scroll';
import cv from '../../images/cv.png';
import defever from '../../images/defever.png';
import pizza from '../../images/pizza.png';
import Button from 'react-bootstrap/Button';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className=" pt-5 pb-5" id="portfolio" style={{ backgroundColor: '#feffff' }}>
      <div class="container w-75">
        <h1 className="  font-weight-bold ">PORTFOLIO</h1>
        <div class="underline-bar mb-5"></div>
        <div class="card-deck ">
          <div class="card">
            <img class="card-img-top" src={cv} alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title mt-3 pt-3 font-bebas">Online CV</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional
              </p>
              <button class="card-text mr-1">Website</button>
              <button class="card-text">GitHub</button>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={defever} alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title mt-3 pt-3 font-bebas">Defever</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to additional content.
              </p>
              <button class="card-text mr-1">Website</button>
              <button class="card-text">GitHub</button>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={pizza} alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title mt-3 pt-3 font-bebas">Topizza</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional
              </p>
              <button class="card-text mr-1">Website</button>
              <button class="card-text">GitHub</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
