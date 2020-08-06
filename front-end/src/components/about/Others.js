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

function About() {
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
                <img className="navbar-brand mt-3 " src={HTML} style={{ width: 75 }} alt="#" />
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

export default About;

<ul class="navbar-nav">
  <li class="nav-item active">
    <Link class="nav-link" to="home">
      Home
    </Link>
  </li>
  <li class="nav-item active">
    <Link class="nav-link" to="about">
      About
    </Link>
  </li>
  <li class="nav-item active">
    <Link class="nav-link" to="skills">
      Skills
    </Link>
  </li>
  <li class="nav-item active">
    <Link class="nav-link" to="portfolio">
      Portfolio
    </Link>
  </li>
  <li class="nav-item active">
    <Link class="nav-link" to="contact">
      Contact
    </Link>
  </li>
</ul>;
