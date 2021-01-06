import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portafolio from './components/portafolio/portafolio';
import Testimonios from './components/testimonios/testimonios';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
    <Header />
    <About />
    <Resume />
    {/*<Portafolio />*/}
    {/*<Testimonios />*/}
    <Contact />
    <Footer />
  </div>
  );
}

export default App;
