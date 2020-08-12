import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="">
      <footer style={{ backgroundColor: '#2b7a78' }}>
        <div class="all-content-box">
          <h2>Let's Keep in Touch!</h2>
          <ul class="contact-items">
            <li>
              <a href="https://www.linkedin.com/in/usaghir/" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="mailto:umer.saghir@live.com">
                <i class="fas fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="http://github.com/Usaghir" target="_blank">
                <i class="fab fa-github-square"></i>
              </a>
            </li>
            <li>
              <a href="https://git.2020.school/raja_umer_saghir" target="_blank">
                <i class="fab fa-gitlab"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
