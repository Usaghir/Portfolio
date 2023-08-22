import React from 'react';
import PaperTale from '../../assets/papertale.png';
import defever from '../../assets/defever.jpeg';
import pizza from '../../assets/pizza.jpeg';
import Button from 'react-bootstrap/Button';
import './Project.css';

function Project() {
  function changeBackground(e) {
    e.target.style.background = '#17252a';
    e.target.style.color = '#f7ffff';
  }

  function revertBackground(e) {
    e.target.style.background = 'transparent';
    e.target.style.color = '#17252a';
  }

  return (
    <section className="pt-5 projects">
      <div className="content-wrap divider pt-5 pb-5 container w-75" id="portfolio">
        <h1 className="font-weight-bold">PROJECTS</h1>
        <div className="underline-dark-bar mb-5"></div>
        <div className="underline-bar mb-5"></div>
        <section className="project-item row">
          <img style={{ maxHeight: '200px' }} src={defever} alt="website thumbnail"></img>
          <div className=" text-left">
            <h3 className="font-bebas">Defever</h3>
            <p>
            Defever is React and SpringBoot based COVID-19 era full-stack social media application along with PSQL, Docker and related technologies. It offers user registration and login. A Dashboard page for worldwide COVID-19 cases updates in form of graphs. A page for posts, comment, like, and delete posts. A page for group chat feature and another page to see and update profiles.
            </p>
            <Button
              className="font-bebas pt-2 rounded-0"
              variant="dark"
              href="https://defever.herokuapp.com/"
              target="_blank"
              style={{
                backgroundColor: 'transparent',
                color: '#17252a',
              }}
              onMouseOver={changeBackground}
              onMouseLeave={revertBackground}
            >
              website
            </Button>
            <Button
              className="font-bebas pt-2 ml-2 rounded-0"
              variant="dark"
              href="https://github.com/Usaghir/defever"
              target="_blank"
              style={{
                backgroundColor: 'transparent',
                color: '#17252a',
              }}
              onMouseOver={changeBackground}
              onMouseLeave={revertBackground}
            >
              github
            </Button>
          </div>
        </section>
        <section className="project-item pt-5 row">
          <img style={{ maxHeight: '200px' }} src={pizza} alt="website thumbnail"></img>
          <div className=" text-left">
            <h3 className="font-bebas ">Topizza</h3>
            <p>
            Topizza is a React, Redux, Node, Express based full stack web application along with PostgreSQL and 
            related technologies which demonstrate online pizza order capabilities where users can choose menu 
            items, add to cart, adjust quantities. The application enhances user experience by enabling the 
            retrieval of order history as invoices and also have contact form page for customer service. 
            </p>
            <Button
              className="font-bebas pt-2 rounded-0"
              variant="dark"
              href="https://topizza-31e90.firebaseapp.com/"
              target="_blank"
              style={{
                backgroundColor: 'transparent',
                color: '#17252a',
              }}
              onMouseOver={changeBackground}
              onMouseLeave={revertBackground}
            >
              website
            </Button>
            <Button
              className="font-bebas pt-2 ml-2 rounded-0"
              variant="dark"
              href="https://github.com/Usaghir/Pizza-Task"
              target="_blank"
              style={{
                backgroundColor: 'transparent',
                color: '#17252a',
              }}
              onMouseOver={changeBackground}
              onMouseLeave={revertBackground}
            >
              github
            </Button>
          </div>
        </section>
        <section className="project-item row justify-content-start">
          <img style={{ maxHeight: '200px' }} src={PaperTale} alt="course thumbnail"></img>
          <div className=" text-left">
            <h3 className="font-bebas">PaperTale</h3>
            <p>
            PaperTale is React based marketing web application which showcase the PaperTale mobile app while incentivizing users to download it
            . The application consists of an input page, enabling consumers to input a garment id (e.g., PFAB10323) which present some supply
             chain data, encompassing metrics such as total water and carbon impact, partial worker insights and some product journey stage.
            </p>

            <Button
              className="font-bebas pt-2 rounded-0"
              variant="dark"
              href="https://track.papertale.se/"
              target="_blank"
              style={{
                backgroundColor: 'transparent',
                color: '#17252a',
              }}
              onMouseOver={changeBackground}
              onMouseLeave={revertBackground}
            >
              website
            </Button>
            {/* <Button
              className="font-bebas pt-2 ml-2 rounded-0"
              variant="dark"
              href="https://github.com/Usaghir/Online-CV"
              style={{
                backgroundColor: 'transparent',
                color: '#17252a',
              }}
              onMouseOver={changeBackground}
              onMouseLeave={revertBackground}
            >
              github
            </Button> */}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Project;
