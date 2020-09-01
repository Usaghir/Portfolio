import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="pt-5">
      <footer style={{ backgroundColor: '#3aafa9' }}>
        <div className="all-content-box pt-5">
          <h2>Let's Keep in Touch!</h2>
          <ul className="contact-items mb-0 pb-5">
            <li>
              <a href="https://www.linkedin.com/in/usaghir/" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="mailto:umer.saghir@live.com">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="http://github.com/Usaghir" target="_blank">
                <i className="fab fa-github-square"></i>
              </a>
            </li>
            <li>
              <a href="https://git.2020.school/raja_umer_saghir" target="_blank">
                <i className="fab fa-gitlab"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
