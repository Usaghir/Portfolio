import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id="about" style={{ backgroundColor: '#feffff' }}>
      <div class=" container w-75">
        <h1 className="mt-5 mb-5 pt-5 pb-5">About</h1>
        <div class="">
          <h4 class="">Work Experience</h4>

          <section class="job-item mb-3 pb-3 bottom-border">
            <div class="text-left">
              <h5>ASSIT. MANAGER (R&D)</h5>
              <h6>June 2014 - October 2019</h6>
              <h6>Outso AB & PaperTale AB</h6>
              <h6>Malmo, Sweden</h6>
            </div>
            <div class="job-summary">
              <article class="text-left">
                Research and development of sustainable, efficient and traceable textile production
                using RFID/NFC. IT support, web development, testing, domains, emails and
                control-panel administration.
              </article>
            </div>
          </section>

          <h4 className="mb-3 pb-3">Education</h4>
          <section class="text-left bottom-border">
            <div class="">
              <section>
                <h5>System Development Java and Web-technologies </h5>
                <p>Software Development Academy, 2020 (four months)</p>
                <p>Royal Institute of Technology (KTH) & Novare Potential</p>
                <p>Lund, Sweden</p>
              </section>

              <section>
                <h5>Full Stack Web-development</h5>
                <p>HackYourFuture & Foo Coding, 2018 - 2019 (six months)</p>
                <p>Malmo, Sweden</p>
              </section>

              <section>
                <h5>MSC Electrical Engineering</h5>
                <p>Radio Communication & Signal Processing </p>
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
