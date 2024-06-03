import React from 'react';
import './About.css';

const About = () => {
  return (
    <div
      className='pt-5 about-background'
      id='about'
      style={{ backgroundColor: '#def2f1' }}
    >
      <div className='pt-5 pb-5 container w-75'>
        <h1 className=' font-weight-bold'>ABOUT</h1>
        <div className='underline-bar mb-3'></div>
        <div className='pt-5'>
          <div className='col mt-5  work-comp'>
            <i className='rotate-icon fas fa-briefcase'></i>
          </div>
          <h3 className='pt-5 font-bebas'>Work Experience</h3>
          <section className='job-item bottom-border mt-5'>
            <div className='text-left'>
              <h5 className='font-weight-bold'>
                Backend and Product Developer
              </h5>
              <h6 className='font-weight'>November 2023 - Present</h6>
              <p className='font-weight-bold'>
                <a
                  href='https://paramountric.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ fontWeight: 'bold', textDecoration: 'underline' }}
                >
                  Paramountric AB
                </a>
                <h6>Malmo, Sweden</h6>
              </p>
            </div>
            <div className='job-summary'>
              <article className='text-left font-weight '>
                Playing a pivotal role in engineering a real-time collaboration
                platform focused on sustainability data, utilizing Next.js,
                React, TypeScript, Tailwind, LiveBlocks, and Zustand.
              </article>
              <h6 className='text-left mt-3 font-weight-bold'>
                Key Responsibilities
              </h6>
              <ul className='text-left mb-5'>
                <li className='mb-2'>
                  Spearheading the development of a Next.js-based collaboration
                  platform, focusing on real-time interaction, user management
                  with TypeScript, LiveBlocks, and Zustand.
                </li>
                <li className='mb-2'>
                  Achieved seamless database integration using Server Actions,
                  Prisma, PostgreSQL, and Supabase.
                </li>
                <li className='mb-2'>
                  Implemented CI/CD with Git/GitHub for streamlined development
                  cycles.
                </li>
                <li className='mb-2'>
                  Integrated Firestore for streamlined database operations and
                  Cloud Bucket for efficient image storage, contributing to
                  seamless data management and retrieval.
                </li>
                <li className='mb-2'>
                  Implemented authentication with Next Auth, Clerk Auth, and
                  Google Auth.
                </li>
              </ul>
            </div>
          </section>
          <section className='job-item bottom-border mt-5'>
            <div className='text-left'>
              <h5 className='font-weight-bold'>Software Developer</h5>
              <h6 className='font-weight'>November 2022 - November 2023</h6>
              <p className='font-weight-bold'>
                <a
                  href='https://www.upwork.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ fontWeight: 'bold', textDecoration: 'underline' }}
                >
                  UpWork
                </a>
              </p>
            </div>
            <div className='job-summary'>
              <article className='text-left font-weight '>
                Was instrumental in creating a sophisticated expense management
                system, specifically designed to align with our client's unique
                requirements.
              </article>
              <h6 className='text-left mt-3 font-weight-bold'>
                Key Responsibilities
              </h6>
              <ul className='text-left mb-5'>
                <li className='mb-2'>
                  Developed and tested React and Next.js applications, employing
                  Server-Side Rendering (SSR), Client-Side Rendering (CSR), and
                  Static Site Generation (SSG) for responsive experiences.
                </li>
                <li className='mb-2'>
                  Implemented Hooks, Context API, and Redux for efficient state
                  management, ensuring optimal performance and maintainability.
                </li>
                <li className='mb-2'>
                  Executed authentication mechanisms using JWT, OAuth, Google,
                  and Firebase, enhancing the security and user access control
                  of the applications.
                </li>
                <li className='mb-2'>
                  Integrated Firestore for streamlined database operations and
                  Cloud Bucket for efficient image storage, contributing to
                  seamless data management and retrieval.
                </li>
                <li className='mb-2'>
                  Collaborated within cross-functional teams, ensuring effective
                  communication on deployed projects.
                </li>
                <li className='mb-2'>
                  Committed to ongoing growth, staying updated on the latest UI
                  trends.
                </li>
              </ul>
            </div>
          </section>
          <section className='job-item bottom-border mt-5'>
            <div className='text-left'>
              <h5 className='font-weight-bold'>Software Engineer</h5>
              <h6 className='font-weight'>February 2021 - September 2022</h6>
              <p className='font-weight-bold'>
                <a
                  href='https://www.papertale.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ fontWeight: 'bold', textDecoration: 'underline' }}
                >
                  PaperTale Technology AB
                </a>
              </p>
              <h6>Malmo, Sweden</h6>
            </div>
            <div className='job-summary'>
              <article className='text-left font-weight '>
                Spearheaded the development of sustainable, efficient, and
                traceable textile supply chain applications for web and mobile,
                gaining adoption by top brands.
                <a
                  href='https://www.ginatricot.com/eu/stories/papertale'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ fontWeight: 'bold', textDecoration: 'underline' }}
                >
                  Gina Tricot
                </a>{' '}
                and{' '}
                <a
                  href='https://sailracing.com/us/en/product/coast-tee-2'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ fontWeight: 'bold', textDecoration: 'underline' }}
                >
                  SailRacing
                </a>
                .
              </article>
              <h6 className='text-left mt-3 font-weight-bold'>
                Key Responsibilities
              </h6>
              <ul className='text-left mb-5'>
                <li className='mb-2'>
                  Developed responsive user interfaces using JavaScript,
                  TypeScript, React, and Redux to ensure a seamless user
                  experience.
                </li>
                <li className='mb-2'>
                  Designed and integrated RESTful APIs with Node, Express, and
                  PostgreSQL for robust backend functionality.
                </li>
                <li className='mb-2'>
                  Utilized version control systems like Git, GitHub, and GitLab,
                  while implementing continuous integration/continuous
                  deployment (CI/CD) practices.
                </li>
                <li className='mb-2'>
                  Conducted comprehensive testing, including unit and manual
                  testing, to ensure compatibility across various devices and
                  browsers.
                </li>
                <li className='mb-2'>
                  Contributed to the development of a Java Spring Boot-based SAS
                  application.
                </li>
                <li className='mb-2'>
                  Configured and deployed full-stack web applications on
                  Firebase, AWS, and GCP virtual machine instances using Docker.
                </li>
                <li className='mb-2'>
                  Contributed to the development of Flutter mobile applications
                  for iOS and Android using Dart, Flutter, and Material UI,
                  ensuring cross-platform and visually cohesive solutions.
                </li>
                <li className='mb-2'>
                  Conducted code reviews, providing constructive feedback to the
                  team to uphold agile development practices.
                </li>
                <li className='mb-2'>
                  Undertook roles in managing requirements, offering UI/UX and
                  design assistance, and fulfilling Scrum Master and Product
                  Owner roles and responsibilities.
                </li>
              </ul>
            </div>
          </section>
          <section className='job-item bottom-border mt-2'>
            <div className='text-left'>
              <h5 className='font-weight-bold'>
                {' '}
                Engineer (Developer & Web Admin)
              </h5>
              <h6 className='font-weight'>August 2017 - Oct 2019</h6>
              <p className='font-weight-bold'>
                <a
                  href='https://outso.se/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ fontWeight: 'bold', textDecoration: 'underline' }}
                >
                  Outso AB
                </a>
              </p>
              <h6>Malmo, Sweden</h6>
            </div>
            <div className='job-summary'>
              <article className='text-left font-weight '>
                Led technical support and back-office operations at a textile
                startup, focusing on enhancing system reliability and
                operational efficiency.
              </article>
              <h6 className='text-left mt-3 font-weight-bold'>
                Key Responsibilities
              </h6>
              <ul className='text-left mb-5'>
                <li className='mb-2'>
                  Led the end-to-end development, testing, and maintenance of
                  WordPress and Shopify online stores, prioritizing an
                  outstanding user experience.
                </li>
                <li className='mb-2'>
                  Provided expert technical support and troubleshooting for web
                  applications, ensuring seamless and uninterrupted operations.
                </li>
                <li className='mb-2'>
                  Administered domains, emails, and control panels, overseeing
                  the hosting and maintenance of websites.
                </li>
                <li className='mb-2'>
                  Delivered comprehensive technical support for both hardware
                  and software applications, ensuring optimal operational
                  efficiency.
                </li>
              </ul>
            </div>
          </section>
          <section className='job-item bottom-border mt-2'>
            <div className='text-left'>
              <h5 className='font-weight-bold'> Consultant (Freelancer)</h5>
              <h6 className='font-weight'>June 2014 - July 2017</h6>
              <p className='font-weight-bold'>
                <a
                  href='https://outso.se/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ fontWeight: 'bold', textDecoration: 'underline' }}
                >
                  Outso AB
                </a>
              </p>
              <h6>Malmo, Sweden</h6>
            </div>
            <div className='job-summary'>
              <article className='text-left font-weight '>
                Managed comprehensive technical support and back-office
                functions within a textile and supply chain startup,
                contributing to streamlined processes and improved service
                delivery.
              </article>
              <h6 className='text-left mt-3 font-weight-bold'>
                Key Responsibilities
              </h6>
              <ul className='text-left mb-5'>
                <li className='mb-2'>
                  Oversaw comprehensive back-office operations, managing
                  documentation, invoicing, and order processing with precision.
                </li>
                <li className='mb-2'>
                  Coordinated seamlessly with suppliers and logistics partners,
                  ensuring efficient import/export operations.
                </li>
                <li className='mb-2'>
                  Played a key role in inventory management, diligently tracking
                  stock levels, and resolving discrepancies.
                </li>
                <li className='mb-2'>
                  Managed accounts payable and receivable, maintaining
                  meticulous financial records and ensuring a streamlined
                  payment process.
                </li>
                <li className='mb-2'>
                  Provided adept support for administrative tasks, including
                  professional email correspondence and efficient office
                  supplies management.
                </li>
              </ul>
            </div>
          </section>
          <div className='underline'></div>
          <div className='disp-top edu-items col mt-5 pt-5 '>
            <div className=' edu-comp'>
              <i className=' rotate-icon fas fa-chalkboard-teacher'></i>
            </div>
          </div>
          <h3 className='pt-5 font-bebas'>Trainings</h3>
          <section className='job-item bottom-border mt-5'>
            <div className='text-left'>
              <h5 className='font-weight-bold'>System Development Java</h5>
              <h6 className='font-weight'>Feb 2020 - May 2020</h6>
              <p className='font-weight-bold'>
                <a
                  href='https://www.kth.se/en/itm/sda/software-development-academy-1.841849'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ fontWeight: 'bold', textDecoration: 'underline' }}
                >
                  Software Development Academy
                </a>
              </p>
              <p className=''>
                <a
                  href='https://www.kth.se'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ textDecoration: 'underline' }}
                >
                  Royal Institute of Technology (KTH)
                </a>{' '}
                &{' '}
                <a
                  href='https://novare.se/potential/en/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ textDecoration: 'underline' }}
                >
                  Novare Potential
                </a>{' '}
              </p>
              <h6>Lund, Sweden</h6>
            </div>
            <div className='job-summary'>
              <article className='text-left font-weight '>
                Software Development Academy is a collaborative programme of
                Royal Institute of Technology (KTH) and Novare Potential.
              </article>
              <h6 className='text-left mt-3 font-weight-bold font-bebas'>
                COURSE CONTENTS
              </h6>
              <ul className='text-left mb-5'>
                <li>Programming in Java</li>
                <li>Data Structure and Algorithms</li>
                <li>Object-oriented programming and design</li>
                <li>Software Engineering (UML, Lean, Agile, Scrum)</li>
                <li>Testing methods and tools, Unit testing</li>
                <li>Web application development, Spring Boot</li>
                <li>Git, GitHub, GitLab, Unix, Linux, Terminal</li>
                <li>Database, SQL, PostgreSQL, MongoDB, XML, JSON</li>
                <li>Data access, web services, HTTP, AJAX, REST API</li>
                <li>Best practices for large-scale development</li>
                <li>Individual and group project</li>
              </ul>
            </div>
          </section>
          <section className='job-item bottom-border mt-2'>
            <div className='text-left'>
              <h5 className='font-weight-bold'>
                Full-stack Web-Development JavaScript
              </h5>
              <h6 className='font-weight'>Dec 2018 - May 2019</h6>
              <p className='font-weight-bold'>
                <a
                  href='https://www.foocoding.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ fontWeight: 'bold', textDecoration: 'underline' }}
                >
                  Foo Coding
                </a>
              </p>

              <h6>Malmo, Sweden</h6>
            </div>
            <div className='job-summary'>
              <article className='text-left font-weight '>
                Foo Coding is full-stack web-development programme by the Foo
                Cafe in Malmo and Stockholm.
              </article>
              <h6 className='text-left mt-3 font-weight-bold font-bebas'>
                COURSE CONTENTS
              </h6>
              <ul className='text-left mb-5'>
                <li>Programming in JavaScript</li>
                <li>HTML5, CSS3, Bootstrap</li>
                <li>Responsive web design </li>
                <li>React, Redux, Context API</li>
                <li>Web application development, Node, Express</li>
                <li>Git, GitHub, GitLab, CLI</li>
                <li>Database, SQL, MySQL</li>
                <li>Web services, HTTP, AJAX, REST API</li>
                <li>Individual and Group project</li>
              </ul>
            </div>
          </section>
          <div className='underline'></div>
          <div className='disp-top edu-items col mt-5 pt-5 '>
            <div className=' edu-comp'>
              <i className='rotate-icon fas fa-graduation-cap'></i>
            </div>
          </div>
          <h3 className='mt-5 font-bebas'>Academic Education</h3>
          <div className='container'>
            <div className='row'>
              <section className='col text-left bottom-border mt-5'>
                <section>
                  <h5 className='mt-4 font-weight-bold text-uppercase'>
                    MS Electrical Engineering
                  </h5>
                  <p className='font-weight'>Radio Communication </p>
                  <p className='font-weight'> 2010 - 2013</p>
                  <p className='font-weight-bold'>
                    <a
                      href='https://www.bth.se/'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        fontWeight: 'bold',
                        textDecoration: 'underline',
                      }}
                    >
                      Blekinge Institute of Technology
                    </a>
                  </p>
                  <p>Karlskrona, Sweden</p>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
