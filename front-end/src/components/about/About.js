import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id="about" style={{ backgroundColor: '#def2f1' }}>
      <div className="pt-5 pb-5 container w-75">
        <h1 className="mt-5  font-weight-bold">ABOUT</h1>
        <div className="underline-bar mb-5"></div>
        <div className="">
          <h3 className="mt-5 font-bebas">Work Experience</h3>

          <section className="job-item bottom-border mt-5">
            <div className="text-left">
              <h5 className="font-weight-bold">ASSIT. MANAGER (R&D)</h5>
              <h6 className="font-weight">June 2014 - October 2019</h6>
              <h6>Outso AB & PaperTale AB</h6>
              <h6>Malmo, Sweden</h6>
            </div>
            <div className="job-summary">
              <article className="text-left font-weight ">
                Research and development of sustainable, efficient and traceable textile production
                using RFID/NFC. IT support, web development, testing, domains, emails and
                control-panel administration.
              </article>
              <h6 className="text-left mt-3 font-weight-bold">Key Responsibilities</h6>
              <ul className="text-left ">
                <li>R&D of sustainable and trackable textile production</li>
                <li>IT support, web development, testing, ERP development</li>
                <li>Website payment gateway integration & maintenance</li>
                <li>Documentation, presentation, data analysis & report writing</li>
                <li>Coordination with overseas teams, customers & vendors</li>
              </ul>
            </div>
          </section>

          <h3 className="mt-5 font-bebas">Education</h3>
          <section className="text-left bottom-border mt-5">
            <div className="">
              <section>
                <h5 className="font-weight-bold text-uppercase">
                  System Development Java and Web-technologies
                </h5>
                <p className="font-weight">Software Development Academy, 2020 (four months)</p>
                <p>Royal Institute of Technology (KTH) & Novare Potential</p>
                <p>Lund, Sweden</p>
              </section>

              <section>
                <h5 className="mt-4 font-weight-bold text-uppercase">Full Stack Web-development</h5>
                <p className="font-weight">HackYourFuture & Foo Coding, 2018 - 2019 (six months)</p>
                <p>Malmo, Sweden</p>
              </section>

              <section>
                <h5 className="mt-4 font-weight-bold text-uppercase">MSC Electrical Engineering</h5>
                <p className="font-weight">Radio Communication & Signal Processing </p>
                <p>Blekinge Institute of Technology, 2010 - 2013</p>
                <p>Kalskrona, Sweden</p>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
