import React, { useState } from 'react';

import './Skills.css';

function Skills() {
  const [state] = useState({
    frontEnd: [
      { HTML: '50' },
      { CSS: '45' },
      { Bootstrap: '45' },
      { Tailwind: '45' },
      { JavaScript: '55' },
      { TypeScript: '50' },
      { React: '65' },
      { Redux: '35' },
      { 'NEXT JS': '35' },
      { Flutter: '35' },
      { 'Figma': '35' },
    ],
    backEnd: [
      { NodeJS: '35' },
      { Express: '35' },
      { SQL: '35' },
      { NoSQL: '35' },
      { RestAPI: '25' },
      { GraphQL: '25' },
      { Firebase: '25' },
      { AWS: '25' },
      { Docker: '25' },
      { Java: '45' },
      { SpringBoot: '25' },
    ],
    tools: [
      { Git: '45' },
      { NPM: '40' },
      { Yarn: '40' },
      { Jest: '40' },
      { IntelliJ: '40' },
      { 'VS Code': '40' },
      { XCode: '40' },
      { Postman: '40' },
      { Slack: '35' },
      { Trello: '35' },
      { Jira: '35' },
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
              <h3 className="mt-4 pt-4 mb-3 pb-3 font-bebas">Tools</h3>
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
