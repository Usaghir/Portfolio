import React from 'react';
import './About.css';


const About = () => {
  return (
    <div className="pt-5 about-background" id="about" style={{ backgroundColor: '#def2f1' }}>
      <div className="pt-5 pb-5 container w-75">
        <h1 className=" font-weight-bold">ABOUT</h1>
        <div className="underline-bar mb-3"></div>
        <div className="pt-5">
          <div className="col mt-5  work-comp">
            <i className="rotate-icon fas fa-briefcase"></i>
          </div>
          <h3 className="pt-5 font-bebas">Work Experience</h3>
          <section className="job-item bottom-border mt-5">
            <div className="text-left">
              <h5 className="font-weight-bold">Software Engineer</h5>
              <h6 className="font-weight">February 2021 - September 2022</h6>
              <p className="font-weight-bold">
                <a href="https://www.papertale.org/" target="_blank" rel="noopener noreferrer">
                  PaperTale Technology AB
                </a>
              </p>
              <h6>Malmo, Sweden</h6>
            </div>
            <div className="job-summary">
              <article className="text-left font-weight ">
              Engineers and developers worked on a web development project for sustainable, efficient, and traceable textile production and supply chain applications
              </article>
              <h6 className="text-left mt-3 font-weight-bold">Key Responsibilities</h6>
              <ul className="text-left mb-5">
                <li>Full-stack development using React and Node JS</li>
                <li>Mobile App development, Dart and Flutter </li>
                <li>Backend development using Java, Spring, and AWS</li>
                <li>Testing and deployment of web applications</li>
                <li>UX/UI design assistance and quality assurance</li>
                <li>Deployment of websites and mobile apps</li>
                <li>Requirement management and product ownership roles</li>
              </ul>
            </div>
          </section>
          <section className="job-item bottom-border mt-2">
            <div className="text-left">
              <h5 className="font-weight-bold">Project Engineer</h5>
              <h6 className="font-weight">August 2017 - Oct 2019</h6>
              <p className="font-weight-bold">
                
                <a href="https://outso.se/" target="_blank" rel="noopener noreferrer">
                  Outso AB
                </a>
              </p>
              <h6>Malmo, Sweden</h6>
            </div>
            <div className="job-summary">
              <article className="text-left font-weight ">
                Worked in research and development project of sustainable, efficient and traceable
                textile production application.
              </article>
              <h6 className="text-left mt-3 font-weight-bold">Key Responsibilities</h6>
              <ul className="text-left mb-5">
                <li>Technical support, web development and testing</li>
                <li>WordPress and Shopify online store development</li>
                <li>Domains, emails, and control-panel administration</li>
                <li>Documentation, presentation, and report writing</li>
              </ul>
            </div>
          </section>
          <div className="underline"></div>
          <div className="disp-top edu-items col mt-5 pt-5 ">
            <div className=" edu-comp">
              <i className=" rotate-icon fas fa-chalkboard-teacher"></i>
            </div>
          </div>
          <h3 className="pt-5 font-bebas">Trainings</h3>
          <section className="job-item bottom-border mt-5">
            <div className="text-left">
              <h5 className="font-weight-bold">System Development Java</h5>
              <h6 className="font-weight">Feb 2020 - May 2020</h6>
              <p className="font-weight-bold">
                <a
                  href="https://www.kth.se/en/itm/sda/software-development-academy-1.841849"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Software Development Academy
                </a>
              </p>
              <p className="">
                <a href="https://www.kth.se" target="_blank" rel="noopener noreferrer">
                  Royal Institute of Technology (KTH)
                </a>{' '}
                &{' '}
                <a
                  href="https://www.novarepotential.se/software-development-academy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Novare Potential
                </a>{' '}
              </p>
              <h6>Lund, Sweden</h6>
            </div>
            <div className="job-summary">
              <article className="text-left font-weight ">
                Software Development Academy is a collaborative programme of Royal Institute of
                Technology (KTH) and Novare Potential.
              </article>
              <h6 className="text-left mt-3 font-weight-bold font-bebas">COURSE CONTENTS</h6>
              <ul className="text-left mb-5">
                <li>Programming in Java</li>
                <li>Data Structure and Algorithms</li>
                <li>Object-oriented programming and design</li>
                <li>Software Engineering (UML, Lean, Agile, Scrum)</li>
                <li>Testing methods and tools, Unit testing</li>
                <li>Web application development, Spring Boot</li>
                <li>Git, GitHub, GitLab, Unix, Linux, Terminal</li>
                <li>Database, SQL, PostgreSQL, MongoDB, XML, JSON</li>
                <li>Data access, web services, HTTP, AJAX, REST API</li>
                <li>Best practices for large-scale development</li>
                <li>Individual and group project</li>
              </ul>
            </div>
          </section>
          <section className="job-item bottom-border mt-2">
            <div className="text-left">
              <h5 className="font-weight-bold">Full-stack Web-Development JavaScript</h5>
              <h6 className="font-weight">Dec 2018 - May 2019</h6>
              <p className="font-weight-bold">
                <a href="https://www.foocoding.org/" target="_blank" rel="noopener noreferrer">
                  Foo Coding
                </a>
              </p>
              <p className="">
                <a href="https://foocafe.org/" target="_blank" rel="noopener noreferrer">
                  Foo Cafe Foundation
                </a>
              </p>

              <h6>Malmo, Sweden</h6>
            </div>
            <div className="job-summary">
              <article className="text-left font-weight ">
                Foo Coding is full-stack web-development programme by the Foo Cafe
                 in Malmo and Stockholm.
              </article>
              <h6 className="text-left mt-3 font-weight-bold font-bebas">COURSE CONTENTS</h6>
              <ul className="text-left mb-5">
                <li>Programming in JavaScript</li>
                <li>HTML5, CSS3, Bootstrap</li>
                <li>Responsive web design </li>
                <li>React, Redux, Context API</li>
                <li>Web application development, Node, Express</li>
                <li>Git, GitHub, GitLab, CLI</li>
                <li>Database, SQL, MySQL</li>
                <li>Web services, HTTP, AJAX, REST API</li>
                <li>Individual and Group project</li>
              </ul>
            </div>
          </section>
          <div className="underline"></div>
          <div className="disp-top edu-items col mt-5 pt-5 ">
            <div className=" edu-comp">
              <i className="rotate-icon fas fa-graduation-cap"></i>
            </div>
          </div>
          <h3 className="mt-5 font-bebas">Education</h3>
          <div className="container">
            <div className="row">
              <section className="col text-left bottom-border mt-5">
                <section>
                  <h5 className="mt-4 font-weight-bold text-uppercase">
                    MS Electrical Engineering
                  </h5>
                  <p className="font-weight">Radio Communication </p>
                  <p className="font-weight"> 2010 - 2013</p>
                  <p className="font-weight-bold">
                    <a href="https://www.bth.se/" target="_blank" rel="noopener noreferrer">
                      Blekinge Institute of Technology
                    </a>
                  </p>
                  <p>Kalskrona, Sweden</p>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
