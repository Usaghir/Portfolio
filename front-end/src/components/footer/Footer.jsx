import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="">
      <footer className="pt-5 pb-5" style={{ backgroundColor: '#2b7a78' }}>
        <div className="all-content-box mt-5">
          <h2>Let's Keep in Touch!</h2>
          <ul className="contact-items mb-0 pb-5">
            <li>
              <a href="https://www.linkedin.com/in/usaghir/" target="_blank">
                <i className="fab fa-linkedin "></i>
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
          </ul>
          <div>Copyright © {year}, All right reserved by Raja Umer Saghir </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
