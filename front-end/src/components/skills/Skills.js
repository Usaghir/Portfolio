import React, { useContext, useState, useReducer } from 'react';

import './Skills.css';

function Skills() {
  const [state, setState] = useState({
    frontEnd: [
      { HTML5: '65' },
      { CSS3: '55' },
      { Bootstrap: '55' },
      { JavaScript: '55' },
      { React: '45' },
      { Redux: '35' },
      { Photoshop: '25' },
      { 'Adobe XD': '25' },
    ],
    backEnd: [
      { NodeJS: '35' },
      { Express: '35' },
      { MongoDB: '35' },
      { Firebase: '25' },
      { Java: '45' },
      { 'Spring Boot': '25' },
      { MySQL: '35' },
      { PostgreSQL: '35' },
    ],
    tools: [
      { Git: '50' },
      { NPM: '50' },
      { 'VS Code': '50' },
      { Maven: '25' },
      { Gradle: '25' },
      { IntelliJ: '50' },
      { Eclipse: '50' },
      { 'Draw IO': '50' },
      { Docker: '25' },
      { PostMan: '50' },
      { Jira: '50' },
    ],
  });
  return (
    <div className="mt-5 pt-5 bg-col" id="skills" style={{ backgroundColor: '#feffff' }}>
      <div className=" mb-5 pb-5 container w-75">
        <h1 className="  font-weight-bold ">SKILLS</h1>
        <div class="underline-bar mb-5"></div>
        <div class="mb-5"></div>
        <div className="">
          <div className=" justify-content-around row">
            <div className="">
              <a className="col mt-5 skill-components ">
                <i class="rotate-icon fas fa-code"></i>
              </a>
              <h3 className="mt-4 pt-4 mb-3 pb-3 font-bebas">Front end</h3>
              <ul className=" col list-group skill-list">
                {state.frontEnd.map((item) => (
                  <li className=" list-group-item border-0" style={{ backgroundColor: '#feffff' }}>
                    <div class="progress pro-h" style={{ backgroundColor: '#def2f1' }}>
                      <div
                        class="progress-bar w-25"
                        role="progressbar"
                        style={{ backgroundColor: '#2b7a78' }}
                      >
                        {Object.keys(item)}
                      </div>
                      <div
                        class="progress-bar-striped"
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
              <a className="col mt-5 skill-components">
                <i class="rotate-icon fas fa-server"></i>
              </a>
              <h3 className="mt-4 pt-4 mb-3 pb-3 font-bebas">Back end</h3>
              <ul className=" col list-group skill-list">
                {state.backEnd.map((item) => (
                  <li className=" list-group-item border-0" style={{ backgroundColor: '#feffff' }}>
                    <div class="progress pro-h" style={{ backgroundColor: '#def2f1' }}>
                      <div
                        class="progress-bar w-25"
                        role="progressbar"
                        style={{ backgroundColor: '#2b7a78' }}
                      >
                        {Object.keys(item)}
                      </div>
                      <div
                        class="progress-bar-striped"
                        role="progressbar"
                        style={{ backgroundColor: '#3aafa9', width: Object.values(item) + '%' }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <a className="col mt-5 skill-components">
                <i class="rotate-icon fas fa-tools "></i>
              </a>
              <h3 className="mt-4 pt-4 mb-3 pb-3 font-bebas">Tools</h3>
              <ul className="col list-group skill-list ">
                {state.tools.map((item) => (
                  <li className=" list-group-item border-0" style={{ backgroundColor: '#feffff' }}>
                    <div class="progress pro-h" style={{ backgroundColor: '#def2f1' }}>
                      <div
                        class="progress-bar w-25"
                        role="progressbar"
                        style={{ backgroundColor: '#2b7a78' }}
                      >
                        {Object.keys(item)}
                      </div>
                      <div
                        class="progress-bar-striped"
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
