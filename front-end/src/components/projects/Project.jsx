import React from 'react';
import PaperTale from '../../assets/papertale.png';
import defever from '../../assets/defever.jpeg';
import pizza from '../../assets/pizza.jpeg';
import EpicMust from '../../assets/epicmust.png';
import Button from 'react-bootstrap/Button';

import './Project.css';
import { Link } from 'react-router-dom';

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
    <section className='pt-5 projects'>
      <div
        className='content-wrap divider pt-5 pb-5 container w-75'
        id='portfolio'
      >
        <h1 className='font-weight-bold'>PROJECTS</h1>
        <div className='underline-dark-bar mb-5'></div>
        <div className='underline-bar mb-5'></div>
        <section className='project-item row justify-content-start'>
          <a href='https://track.papertale.se/' target='_blank'>
            <img
              style={{ maxHeight: '200px' }}
              src={PaperTale}
              alt='course thumbnail'
            ></img>
          </a>
          <div className=' text-left'>
            <h3 className='font-bebas'>PaperTale Tracking App</h3>
            <p>
              The PaperTale Tracking App, a React-based marketing web
              application, used by renowned Swedish textile retailers like{' '}
              <a
                href='https://www.ginatricot.com/eu/stories/papertale'
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                }}
              >
                Gina Tricot
              </a>{' '}
              and{' '}
              <a
                href='https://sailracing.com/us/en/product/coast-tee-2'
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                }}
              >
                Sail Racing.
              </a>{' '}
              It incentivizes users toward the PaperTale mobile app. Users input
              a garment ID (PFAB10323) to reveal supply chain data, water and
              carbon impact metrics, worker insights, and the product journey
              while educating on sustainability.
            </p>

            <Button
              className='font-bebas pt-2 rounded-0'
              variant='dark'
              href='https://track.papertale.se/'
              target='_blank'
              style={{
                backgroundColor: 'transparent',
                color: '#17252a',
              }}
              onMouseOver={changeBackground}
              onMouseLeave={revertBackground}
            >
              Link
            </Button>

            <Button
              className='font-bebas pt-2 ml-2 rounded-0'
              variant='dark'
              href='https://www.ginatricot.com/se/gina-lab/transparency'
              target='_blank'
              style={{
                backgroundColor: 'transparent',
                color: '#17252a',
              }}
              onMouseOver={changeBackground}
              onMouseLeave={revertBackground}
            >
              GinaTricot
            </Button>

            <Button
              className='font-bebas pt-2 ml-2 rounded-0'
              variant='dark'
              href='https://sailracing.com/us/en/product/coast-tee-2'
              target='_blank'
              style={{
                backgroundColor: 'transparent',
                color: '#17252a',
              }}
              onMouseOver={changeBackground}
              onMouseLeave={revertBackground}
            >
              SailRacing
            </Button>
          </div>
        </section>
        <section className='project-item row'>
          <a href='https://epicmust.com/' target='_blank'>
            <img
              style={{ maxHeight: '200px' }}
              src={EpicMust}
              alt='website thumbnail'
            ></img>
          </a>
          <div className=' text-left'>
            <h3 className='font-bebas'>EpicMust</h3>
            <p>
              The EpicMust Store is a fully-featured and running Shopify
              e-commerce responsive website, equipped with integrated payment
              gateways such as Stripe, sophisticated email marketing tools,
              interactive contact forms, product reviews, engaging promotional
              pop-ups, and GDPR-compliant cookies. It represents the perfect
              fusion of functionality and design in a secure online shopping
              environment.
            </p>
            <Button
              className='font-bebas pt-2 rounded-0'
              variant='dark'
              href='https://epicmust.com/'
              target='_blank'
              style={{
                backgroundColor: 'transparent',
                color: '#17252a',
              }}
              onMouseOver={changeBackground}
              onMouseLeave={revertBackground}
            >
              Link
            </Button>
          </div>
        </section>
        <section className='project-item row'>
          <a href='https://defever.netlify.app/' target='_blank'>
            <img
              style={{ maxHeight: '200px' }}
              src={defever}
              alt='website thumbnail'
            ></img>
          </a>
          <div className=' text-left'>
            <h3 className='font-bebas'>Defever</h3>
            <p>
              Defever is a React and Spring Boot COVID-19 and social media demo
              application. It facilitates user registration and login, featuring
              a dashboard providing worldwide COVID-19 updates through
              insightful graphs. Users can post, comment, like, and delete posts
              on a dedicated page. The application also includes chat and news
              update sections, currently in maintenance and expected to be
              available soon.
            </p>
            <Button
              className='font-bebas pt-2 rounded-0'
              variant='dark'
              href='https://defever.netlify.app/'
              target='_blank'
              style={{
                backgroundColor: 'transparent',
                color: '#17252a',
              }}
              onMouseOver={changeBackground}
              onMouseLeave={revertBackground}
            >
              Link
            </Button>
            <Button
              className='font-bebas pt-2 ml-2 rounded-0'
              variant='dark'
              href='https://github.com/Usaghir/defever'
              target='_blank'
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
        <section className='project-item pt-5 row'>
          <a href='https://defever.netlify.app/' target='_blank'>
            <img
              style={{ maxHeight: '200px' }}
              src={pizza}
              alt='website thumbnail'
            ></img>
          </a>
          <div className=' text-left'>
            <h3 className='font-bebas '>Topizza</h3>
            <p>
              Topizza is a React, Redux, Node, Express based full stack web
              application along with PostgreSQL and related technologies which
              demonstrate online pizza order capabilities where users can choose
              menu items, add to cart, adjust quantities. The application
              enhances user experience by enabling the retrieval of order
              history as invoices and also have contact form page for customer
              service.
            </p>
            <Button
              className='font-bebas pt-2 rounded-0'
              variant='dark'
              href='https://topizza-31e90.firebaseapp.com/'
              target='_blank'
              style={{
                backgroundColor: 'transparent',
                color: '#17252a',
              }}
              onMouseOver={changeBackground}
              onMouseLeave={revertBackground}
            >
              Link
            </Button>
            <Button
              className='font-bebas pt-2 ml-2 rounded-0'
              variant='dark'
              href='https://github.com/Usaghir/Pizza-Task'
              target='_blank'
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
      </div>
    </section>
  );
}

export default Project;
