import React from 'react';
import './About.css';

const About = () => {
  return (
    <div class="bg-light" id="about">
      <div class=" container w-75 d-flex   ">
        <div class="m-4 p-4 ">
          <h2 class="mb-3 pb-3">Work Experience</h2>

          <section class="job-item mb-3 pb-3">
            <div class="text-left">
              <h5>ASSISTANT MANAGER (R&D)</h5>
            </div>
            <div class="job-summary">
              <div class="text-left">
                <h6>Outso AB, Sweden</h6>
                <p>June 2014 - October 2019</p>
              </div>
              <article class="text-left">
                Research and development of sustainable, efficient and traceable textile production
                using RFID/NFC. IT support, web development, testing, domains, emails and
                control-panel administration.
              </article>
            </div>
          </section>

          <h2 class="mb-3 pb-3">Education</h2>

          <section class="job-item">
            <div class="text-left">
              <h5>System Development Java</h5>
            </div>
            <div class="job-summary mb-3 pb-3">
              <div class="text-left">
                <h6>Software Development Academy</h6>
                <p>Lund (Sweden)</p>
                <p>Royal Institute of Technology (KTH) & Novare Potential</p>
                <p>February 2020 - June 2020</p>
                Software Engineering (UML, Lean, Agile, Scrum), Data Structure and Algorithms,
                Testing, Bug Fixing, Web development (Java, Collection API, Spring Boot) Git,
                GitHub, GitLab, Enterprise Technology (Docker, Maven, Gradle, Hibernate, MS Azure)
                Database (PostgresSQL, MongoDB), Individual project & Group project
              </div>
            </div>

            <div class="text-left">
              <h5>Full-stack Development</h5>
            </div>
            <div class="job-summary mb-3 pb-3">
              <div class="text-left">
                <h6> Web Development Course</h6>
                <p>Malmo, Sweden</p>
                <p>HackYourFuture & Foo Coding, Malmo (Sweden)</p>
                <p>November 2018 - May 2019</p>
                HTML5, CSS3, Responsive Design, JavaScript, ES6, React, Redux, Node, Express, NPM,
                HTTP, Ajax, REST API, GraphQL, FireBase, Git, GitHub, Unix, Linux, Terminal,
                Database, MySQL, Group Project
              </div>
            </div>

            <div class="text-left">
              <h5>MSc Electrical Engineering</h5>
            </div>
            <div class="job-summary mb-3 pb-3">
              <div class="text-left">
                <h6>Radio Communication & Signal Processing</h6>
                <p>Blekinge Institute of Technology, 2010 - 2013</p>
                <p>Kalskrona, Sweden</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
