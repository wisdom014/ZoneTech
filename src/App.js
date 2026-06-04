import React from 'react';
import NavBar from './components/navBar';
import Hero from  './components/hero';
import Brand from './components/brand';
import Service from './components/service';
import Testimonial from './components/testimonial';
import Section from './components/section';
import Contact from './components/contact';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Brand />
      <Service />
      <Testimonial />
      <Section />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
