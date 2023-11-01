import React from 'react';
import NavBar from './components/navbar/NavBar.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';
import Project from './components/projects/Project.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';

import './App.css';


function App() {
  return (
    <div className="App">
      <Home />
      <NavBar />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
