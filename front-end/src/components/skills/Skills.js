import React, { useContext, useState } from 'react';

import './Skills.css';

function Skills() {
  const [state, setState] = useState({
    frontEnd: [
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript',
      'React',
      'Redux',
      'Adobe Photoshop',
      'Adobe XD',
    ],
    backEnd: [
      'NodeJS',
      'Express JS',
      'MongoDB',
      'Firebase',
      'Java',
      'Spring Boot',
      'MySQL',
      'PostgreSQL',
    ],
    tools: [
      'Git',
      'NPM',
      'VS Code',
      'Maven',
      'Gradle',
      'IntelliJ',
      'Eclipse',
      'Draw IO',
      'Docker',
      'PostMan',
      'Jira',
    ],
  });
  return (
    <div className="mt-5 pt-5 bg-col" id="skills" style={{ backgroundColor: '#def2f1' }}>
      <div className=" container pt-5 pb-5 w-75">
        <div className="justify-content-around row">
          <div>
            <a className="col skill-components">
              <i class="fas fa-code"></i>
            </a>
            <h3 className="mt-4 pt-4 mb-3 pb-3 ">Front-end</h3>
            <ul className=" col list-group skill-list">
              {state.frontEnd.map((items) => (
                <li className=" list-group-item border-0" style={{ backgroundColor: '#def2f1' }}>
                  <div class="progress pro-h" style={{ backgroundColor: '#2b7a78' }}>
                    <div
                      class="progress-bar w-50"
                      role="progressbar"
                      style={{ backgroundColor: '#3aafa9' }}
                    >
                      {items}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <a className="col skill-components">
              <i class="fas fa-server"></i>
            </a>
            <h3 className="mt-4 pt-4 mb-3 pb-3 ">Back-end</h3>
            <ul className=" col list-group skill-list">
              {state.backEnd.map((items) => (
                <li className=" list-group-item border-0 " style={{ backgroundColor: '#def2f1' }}>
                  <div class="progress pro-h" style={{ backgroundColor: '#2b7a78' }}>
                    <div
                      class="progress-bar w-50"
                      role="progressbar"
                      style={{ backgroundColor: '#3aafa9' }}
                    >
                      {items}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <a className="col skill-components">
              <i class="fas fa-tools "></i>
            </a>
            <h3 className="mt-4 pt-4 mb-3 pb-3 ">Tools</h3>
            <ul className="col list-group skill-list ">
              {state.tools.map((items) => (
                <li className=" list-group-item border-0" style={{ backgroundColor: '#def2f1' }}>
                  <div class="progress pro-h" style={{ backgroundColor: '#2b7a78' }}>
                    <div
                      class="progress-bar w-75"
                      role="progressbar"
                      style={{ backgroundColor: '#3aafa9' }}
                    >
                      {items}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
