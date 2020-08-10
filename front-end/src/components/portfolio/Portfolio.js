import React from 'react';
import cv from '../../images/cv.png';
import defever from '../../images/defever.png';
import pizza from '../../images/pizza.png';

function Portfolio() {
  return (
    <div className="bg-light">
      <div class="container  pt-5 mt-5 pb-5 mb-5">
        <div class="card-deck ">
          <div class="card">
            <img class="card-img-top" src={cv} alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={defever} alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to additional content.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={pizza} alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
