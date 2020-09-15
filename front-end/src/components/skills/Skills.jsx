import React, { useState } from 'react';

import './Skills.css';

function Skills() {
  const [state] = useState({
    frontEnd: [
      { HTML5: '50' },
      { CSS3: '45' },
      { Bootstrap: '45' },
      { JavaScript: '55' },
      { React: '35' },
      { Redux: '35' },
      { ContextAPI: '35' },
      { Photoshop: '35' },
      { 'Adobe XD': '35' },
    ],
    backEnd: [
      { NodeJS: '35' },
      { Express: '35' },
      { Java: '45' },
      { SpringBoot: '25' },
      { MySQL: '35' },
      { PostgreSQL: '35' },
      { MongoDB: '35' },
      { RestAPI: '25' },
      { Firebase: '25' },
    ],
    tools: [
      { Git: '45' },
      { NPM: '40' },
      { IntelliJ: '40' },
      { Eclipse: '40' },
      { 'VS Code': '40' },
      { UML: '40' },
      { 'Draw IO': '40' },
      { Docker: '35' },
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
              <ul className=" col list-group skill-list">
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
              <ul className=" col list-group skill-list">
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
              <ul className="col list-group skill-list ">
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
