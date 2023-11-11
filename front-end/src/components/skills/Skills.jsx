import React, { useState } from 'react';

import './Skills.css';

function Skills() {
  const [state] = useState({
    frontEnd: [
      { HTML: '70' },
      { CSS: '70' },
      { Bootstrap: '70' },
      { Tailwind: '70' },
      { SASS: '70' },
      { SCSS: '70' },
      { 'Material UI': '70' },
      { JavaScript: '70' },
      { TypeScript: '60' },
      { React: '65' },
      { Redux: '55' }, 
      { 'NEXT JS': '55' },
      { Flutter: '45' },
      { 'Canva': '40' },
      { 'Figma': '40' },
      { 'Adobe XD': '40' },
    ],
    backEnd: [
      { 'Node JS': '65' },
      { Express: '65' },
      { Postgres: '65' },
      { MySQL: '65' },
      { MongoDB: '55' },
      { RestAPI: '55' },
      { GraphQL: '35' },
      { Firebase: '45' },
      { AWS: '45' },
      { GCP: '45' },
      { Docker: '50' },
      { DNS: '35' },
      { 'CI CD': '35' },
      { Java: '45' },
      { Spring: '45' },
      { Python: '35' },
    ],
    tools: [
      { Git: '60' },
      { GitHub: '60' },
      { GitLab: '60' },
      { Jira: '50' },
      { Slack: '55' },
      { Trello: '55' },
      { Jest: '50' },
      { Husky: '50' },
      { Postman: '40' },
      { Lucidchart: '60' },
      { 'VS Code': '60' },
      { Xcode: '60' },
      { IntelliJ: '60' },
      { Eclipse: '60' },
      { Wordpress: '40' },
      { Shopify: '40' },
      
     
    ],
  });
  return (
    <div className="pt-5 mb-5 bg-col" id="skills" style={{ backgroundColor: '#ffffff' }}>
      <div className="container pt-5  pb-5 button w-75">
        <h1 className="  font-weight-bold ">SKILLS</h1>
        <div className="underline-bar mb-5"></div>
        <div className=""></div>
        <div className="">
          <div className=" pt-5 justify-content-around row">
            <div className="">
              <div className="col mt-5 skill-components ">
                <i className="rotate-icon fas fa-code"></i>
              </div>
              <h3 className="mt-4 pt-4 mb-3 pb-3 font-bebas">Front end</h3>
              <ul className="mb-5 col list-group skill-list">
                {state.frontEnd.map((item, index) => (
                  <li
                    className=" list-group-item border-0"
                    key={index}
                    style={{ backgroundColor: '#feffff' }}
                  >
                    <div
                      className="progress pro-h rounded-0"
                      style={{ backgroundColor: '#def2f1' }}
                    >
                      <div
                        className="progress-bar w-25 font-weight-bold"
                        role="progressbar"
                        style={{ backgroundColor: '#2b7a78' }}
                      >
                        {Object.keys(item)}
                      </div>
                      <div
                        className="progress-bar-striped"
                        role="progressbar"
                        style={{
                          backgroundColor: '#3aafa9',
                          width: Object.values(item) + '%',
                        }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="col mt-5 skill-components">
                <i className="rotate-icon fas fa-server"></i>
              </div>
              <h3 className="mt-4 pt-4 mb-3 pb-3 font-bebas">Back end</h3>
              <ul className="mb-5 col list-group skill-list">
                {state.backEnd.map((item, index) => (
                  <li
                    className=" list-group-item border-0"
                    key={index}
                    style={{ backgroundColor: '#feffff' }}
                  >
                    <div
                      className="progress pro-h rounded-0"
                      style={{ backgroundColor: '#def2f1' }}
                    >
                      <div
                        className="progress-bar w-25 font-weight-bold"
                        role="progressbar"
                        style={{ backgroundColor: '#2b7a78' }}
                      >
                        {Object.keys(item)}
                      </div>
                      <div
                        className="progress-bar-striped "
                        role="progressbar"
                        style={{ backgroundColor: '#3aafa9', width: Object.values(item) + '%' }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="col mt-5 skill-components">
                <i className="rotate-icon fas fa-tools "></i>
              </div>
              <h3 className="mt-4 pt-4 mb-3 pb-3 font-bebas">Other</h3>
              <ul className="mb-5 col list-group skill-list ">
                {state.tools.map((item, index) => (
                  <li
                    className=" list-group-item border-0"
                    key={index}
                    style={{ backgroundColor: '#feffff' }}
                  >
                    <div
                      className="progress pro-h rounded-0"
                      style={{ backgroundColor: '#def2f1' }}
                    >
                      <div
                        className="progress-bar w-25 font-weight-bold"
                        role="progressbar"
                        style={{ backgroundColor: '#2b7a78' }}
                      >
                        {Object.keys(item)}
                      </div>
                      <div
                        className="progress-bar-striped"
                        role="progressbar"
                        style={{ backgroundColor: '#3aafa9', width: Object.values(item) + '%' }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
