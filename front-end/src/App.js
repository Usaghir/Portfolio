import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar.js';
import Home from './components/home/Home.js';
import About from './components/about/About.js';
import Skills from './components/skills/Skills.js';
import Portfolio from './components/portfolio/Portfolio.js';
import Contact from './components/contact/Contact.js';
import Footer from './components/footer/Footer.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <NavBar />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
