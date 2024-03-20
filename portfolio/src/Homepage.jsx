/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Bgdetails from './components/Bgdetails';
import Footer from './components/Footer';

function Homepage() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Bgdetails />
      <Footer />
    </div>
  )
}

export default Homepage