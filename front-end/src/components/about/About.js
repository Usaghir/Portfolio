import React from 'react';
import './About.css';
import img from './Umer.jpg';

const About = () => {
  return (
    <div class="bg-light">
      <div class="container d-flex justify-content-center  ">
        <div class="all-content-box work-exp-box">
          <h2>Work Experience</h2>
          <section class="job-item">
            <div class="text-left">
              <h3>ASSISTANT MANAGER (R&D)</h3>
              <p>Outso AB, Sweden</p>
              <p>June 2014 - October 2019</p>
            </div>
            <div class="job-summary">
              <article class="text-left">
                R&D of sustainable, efficient and traceable textile production using RFID/NFC and
                blockchain technologies. IT support, web development, testing, domains, emails and
                control-panel administration. Technical documentation, presentation, data analysis,
                report writing and technical support. Technical product/system development by
                collaborating with teams, customers and vendors.
              </article>
            </div>
          </section>
          <section class="education work-edu-boxes">
            <h2>Education</h2>
            <div class="all-content-box">
              <article class="text-left">
                <h3>System Development Java and Web-technologies </h3>
                <p>Software Development Academy, 2020 (four months)</p>
                <p>Royal Institute of Technology (KTH) & Novare Potential</p>
                <p>Lund, Sweden</p>
              </article>

              <article class="text-left">
                <h3>Full Stack Web-development</h3>
                <p>HackYourFuture & Foo Coding, 2018 - 2019 (six months)</p>
                <p>Malmo, Sweden</p>
              </article>

              <article class="text-left">
                <h3>MSC Electrical Engineering</h3>
                <p>Radio Communication & Signal Processing </p>
                <p>Blekinge Institute of Technology, 2010 - 2013</p>
                <p>Kalskrona, Sweden</p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
