/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
// import Works from './components/Works';
import Bgdetails from './components/Bgdetails';
import Footer from './components/Footer';

function Homepage() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      {/* <Works /> */}
      <Bgdetails />
      <Footer />
    </div>
  )
}

export default Homepage