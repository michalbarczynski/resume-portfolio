import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Hero from "./components/Hero/Hero";
import WorkExperience from "./components/Work Experience/WorkExperience";
import ContactMe from "./components/Contact/ContactMe";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <section id="home">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="work-experience">
          <WorkExperience />
        </section>
        <section id="contact">
          <ContactMe />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;