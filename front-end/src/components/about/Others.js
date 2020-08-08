import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
//import git from './images/git.png';
import HTML from './images/html5.png';
import CSS from './images/css3.png';
import JS from './images/js.png';
import react from './images/react.png';
import redux from './images/redux.png';
import boot from './images/bootstrap.png';
import node from './images/node.png';
import express from './images/express.png';
import java from './images/java.png';
import spring from './images/spring.png';
import mysql from './images/mysql.png';
import psql from './images/psql.png';
import mongoDB from './images/mongoDB.png';
import git from './images/git.png';
import github from './images/github.png';
import gitlab from './images/gitlab.png';
import maven from './images/maven.png';
import docker from './images/docker.png';
import gradle from './images/gradle.png';
import vscode from './images/vscode.png';
import './About.css';

function () {
  return (
    <div class="card-deck">
      <div class="card">
        <div class="card-body">
          <h1 className="">
            <i className="fas fa-briefcase"></i>
          </h1>
          <h5 class="card-title">Work Experience</h5>
          <section class="job-item">
            <div class="job-details">
              <h3>ASSISTANT MANAGER (R&D)</h3>
              <p>Outso AB, Sweden</p>
              <p>June 2014 - October 2019</p>
            </div>
          </section>
          <h1 className="">
            {' '}
            <i className="fas fa-graduation-cap"></i>
          </h1>
          <h5 class="card-title">Education</h5>
          <section>
            <h3>System Development Java and Web-technologies</h3>
            <p>Software Development Academy, 2020 (four months)</p>
            <p>Royal Institute of Technology (KTH) & Novare Potential</p>
            <p>Lund, Sweden</p>
          </section>

          <section>
            <h3>Full Stack Web-development</h3>
            <p>HackYourFuture & Foo Coding, 2018 - 2019 (six months)</p>
            <p>Malmo, Sweden</p>
          </section>

          <section>
            <h3>MSC Electrical Engineering</h3>
            <p>Radio Communication & Signal Processing</p>
            <p>Blekinge Institute of Technology, 2010 - 2013</p>
            <p>Kalskrona, Sweden</p>
          </section>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h1>
            <i className="fas fa-laptop-code"></i>
          </h1>
          <h5 class="card-title">Skills</h5>
          <section>
            <h3 class="card-title">Front-end</h3>
            <ul className="skills mb-3">
              <li>
                <img className="navbar-brand mt-3 img" src={HTML} style={{ width: 75 }} alt="#" />
              </li>
              <li>
                <img className="navbar-brand mt-3 img" src={CSS} style={{ width: 75 }} alt="#" />
              </li>
              <li>
                <img className="navbar-brand mt-3 img " src={JS} style={{ width: 75 }} alt="#" />
              </li>
              <li>
                <img className="navbar-brand mt-3 img " src={react} style={{ width: 75 }} alt="#" />
              </li>
              <li>
                <img className="navbar-brand mt-3 img " src={redux} style={{ width: 85 }} alt="#" />
              </li>
              <li>
                <img className="navbar-brand mt-3 img " src={boot} style={{ width: 85 }} alt="#" />
              </li>
            </ul>
          </section>
          <section>
            <h3>Back-end</h3>
            <ul className="skills">
              <li>
                <img className="navbar-brand mt-3 img" src={node} style={{ width: 100 }} alt="#" />
              </li>
              <li>
                <img
                  className="navbar-brand mt-3 img"
                  src={express}
                  style={{ width: 100 }}
                  alt="#"
                />
              </li>
              <li>
                <img className="navbar-brand mt-3 img" src={java} style={{ width: 85 }} alt="#" />
              </li>
              <li>
                <img
                  className="navbar-brand mt-3 img"
                  src={spring}
                  style={{ width: 100 }}
                  alt="#"
                />
              </li>
            </ul>
          </section>
          <section>
            <h3>Database</h3>
            <ul className="skills">
              <li>
                <img
                  className="navbar-brand mt-3 img"
                  src={spring}
                  style={{ width: 100 }}
                  alt="#"
                />
              </li>
              <li>
                <img className="navbar-brand mt-3 img" src={mysql} alt="#" />
              </li>
              <li>
                <img className="navbar-brand mt-3 img" src={psql} alt="#" />
              </li>
              <li>
                <img className="navbar-brand mt-3 img" src={mongoDB} alt="#" />
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h1>
            <i className="fas fa-laptop-code"></i>
          </h1>
          <h5 class="card-title">Skills</h5>

          <section>
            <h3>Tools</h3>
            <ul className="skills">
              <li>
                <img className="navbar-brand mt-3 img" src={git} alt="#" />
              </li>
              <li>
                <img className="navbar-brand mt-3 img" src={github} alt="#" />
              </li>
              <li>
                <img className="navbar-brand mt-3 img" src={gitlab} alt="#" />
              </li>
              <li>
                <img className="navbar-brand mt-3 img" src={maven} alt="#" />
              </li>
              <li>
                <img className="navbar-brand mt-3 img" src={docker} alt="#" />
              </li>
              <li>
                <img className="navbar-brand mt-3 img" src={gradle} alt="#" />
              </li>
              <li>
                <img className="navbar-brand mt-3 img" src={vscode} alt="#" />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ;
.skills {
  position: relative;
  background-color: #1d809f;
  padding-top: 120px;
  padding-bottom: 120px;
  text-align: center;
}

.skill-components {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
}

.skill-components li {
  list-style: none;
  position: relative;
  margin: 0 10px;
}

.skill-components li a {
  width: 70px;
  height: 40px;
  background: #fff;
  display: block;
  text-align: center;
  line-height: 40px;
  font-size: 36px;
  transition: .5s;
}

.skill-components li a:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: -1;
  transform: rotate(60deg);
}

.skill-components li a:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: -1;
  transform: rotate(-60deg);
}