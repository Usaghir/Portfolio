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
    skills: [
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
    <div className="skills">
      <div className="skill-components d-flex justify-content-around">
        <div>
          <a className="skill-items">
            <i class="fas fa-code"></i>
            <h3 className="mt-5 pt-5">Front-end</h3>
            <ul className=" mb-3 ml-0 pl-0 front-img">
              {state.frontEnd.map((items) => (
                <li className=" mt-3">
                  <div class="progress p-bar justify-content-start">
                    <div class="progress-bar p-bar-ch ml-0" role="progressbar">
                      {items}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </a>
        </div>
        <div>
          <a className="skill-items">
            <i class="fas fa-server"></i>
            <h3 className="mt-5 pt-5 ">Back-end</h3>
            <ul className=" mb-3 ml-0 pl-0 front-img">
              {state.backEnd.map((items) => (
                <li className=" mt-3">
                  <div class="progress p-bar justify-content-start">
                    <div class="progress-bar p-bar-ch ml-0 " role="progressbar">
                      {items}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </a>
        </div>
        <div class=" ">
          <a className="skill-items">
            <i class="fas fa-tools"></i>
            <h3 className="mt-5 pt-5">Tool-othe</h3>
            <ul className=" mb-3 ml-0 pl-0 front-img">
              {state.skills.map((items) => (
                <li className=" mt-3">
                  <div class="progress p-bar justify-content-start">
                    <div class="progress-bar p-bar-ch ml-0" role="progressbar">
                      {items}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Skills;
