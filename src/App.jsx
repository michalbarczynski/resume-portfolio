import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Hero />
        <Skills/> 
      </div>
    </>
  );
}

export default App;
