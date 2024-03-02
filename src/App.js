import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';

import './App.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
