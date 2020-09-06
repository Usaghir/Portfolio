import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="pt-5 about-background " id="about" style={{ backgroundColor: '#def2f1' }}>
      <div className="pt-5 pb-5 container w-75">
        <h1 className=" font-weight-bold">ABOUT</h1>
        <div className="underline-bar mb-5"></div>
        <div className="pt-5">
          <div className="col mt-5  work-comp">
            <i className="rotate-icon fas fa-briefcase"></i>
          </div>
          <h3 className="pt-5 font-bebas">Work Experience</h3>
          <section className="job-item bottom-border mt-5">
            <div className="text-left">
              <h5 className="font-weight-bold">Project Engineer (R&D)</h5>
              <h6 className="font-weight">June 2014 - Oct 2019</h6>
              <p className="font-weight-bold">
                <a href="https://www.papertale.org/" target="_blank" rel="noopener noreferrer">
                  PaperTale AB
                </a>{' '}
                &{' '}
                <a href="https://outso.se/" target="_blank" rel="noopener noreferrer">
                  Outso AB
                </a>{' '}
              </p>
              <h6>Malmo, Sweden</h6>
            </div>
            <div className="job-summary">
              <article className="text-left font-weight ">
                Research and development of sustainable, efficient and traceable textile production
                using RFID/NFC and blockchain based technologies.
              </article>
              <h6 className="text-left mt-3 font-weight-bold">Key Responsibilities</h6>
              <ul className="text-left mb-5">
                <li>IT support, web development, testing, ERP development</li>
                <li>WordPres and Shopify online store development </li>
                <li>Website payment gateway integration & maintenance</li>
                <li>Domains, emails and control-panel administration</li>
                <li>Documentation, presentation, data analysis & report writing</li>
                <li>Coordination with overseas teams, customers & vendors</li>
              </ul>
            </div>
          </section>
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
                  <h5 className="font-weight-bold text-uppercase">System Development Java</h5>
                  <p className="font-weight-bold">Software Development Academy</p>
                  <p className="font-weight">Feb 2020 - May 2020</p>
                  <p className="font-weight-bold">
                    <a href="https://www.kth.se/" target="_blank" rel="noopener noreferrer">
                      Royal Institute of Technology (KTH){' '}
                    </a>
                    &{' '}
                    <a
                      href="https://www.novarepotential.se/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Novare Potential
                    </a>
                  </p>
                  <p>Lund, Sweden</p>
                </section>
                <section>
                  <h5 className="mt-4 font-weight-bold text-uppercase">
                    Full Stack Web-development
                  </h5>
                  <p className="font-weight"> Dec 2018 - May 2019</p>
                  <p className="font-weight-bold">
                    <a href="https://www.foocoding.org/" target="_blank" rel="noopener noreferrer">
                      Foo Coding Academy,
                    </a>{' '}
                  </p>
                  <p>Malmo, Sweden</p>
                </section>
                <section>
                  <h5 className="mt-4 font-weight-bold text-uppercase">
                    MS Electrical Engineering
                  </h5>
                  <p className="font-weight">Radio Communication & Signal Processing </p>
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
