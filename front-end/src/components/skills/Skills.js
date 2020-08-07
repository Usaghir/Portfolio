import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div id="skills" className="skills">
      <h3>Skills</h3>
      <h2>What We Offer</h2>
      <div className="skill-components">
        <div>
          <div className="skill-items">
            <i class="fas fa-code"></i>
          </div>
          <h4>Front End </h4>
          <p></p>
        </div>
        <div>
          <div className="skill-items">
            <i class="fas fa-server"></i>
          </div>
          <h4>Back End</h4>
          <p></p>
        </div>
        <div>
          <div className="skill-items">
            <div>
              <span>
                <i class="fas fa-tools"></i>
              </span>
            </div>
          </div>
          <h4>Tools</h4>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
