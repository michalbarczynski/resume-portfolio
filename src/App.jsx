import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Hero from './components/Hero/Hero';
import './App.css'
import WorkExperience from './components/Work Experience/WorkExperience';
import ContactMe from './components/Contact/ContactMe';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills />
        <WorkExperience />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
