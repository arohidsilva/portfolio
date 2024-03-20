/* eslint-disable no-unused-vars */
import React from 'react';
import '../Stylesheets/Works.css';
import work1 from '../assets/port1.jpg';
import work2 from '../assets/port2.jpg';
import work3 from '../assets/port7.jpg';
import Navbar from './Navbar';

function Works() {
  return (
    <section id='works'>
        <span className='WKTitle'>My portfolio</span>
        <span className='WKPara'>I take my pride in paying attention to the smallest details and making sure that my work is perfect. I am excited ti bring my skills and experiances to help business achive their goals and create a strong online presence.</span>
        <div className='WKGroup'>
          <div className='WKItem'>
            <img className='WKImg' src={work1} alt='projectlogo'/>
            <h3>Project1</h3>
            <p>Technologies used: React JS,<br/>JavaScript, HTML/CSS.</p>
          </div>
          <div className='WKItem'>
            <img className='WKImg' src={work2} alt='projectlogo'/>
            <h3>Project2</h3>
            <p>Technologies used: React JS,<br/>JavaScript, HTML/CSS.</p>
          </div>
          <div className='WKItem'>
            <img className='WKImg' src={work3} alt='projectlogo'/>
            <h3>Project3</h3>
            <p>Technologies used: React JS,<br/>JavaScript, HTML/CSS.</p>
          </div>
        </div>
        <button className='WKSeeMore'>
            <div className='WKSeeMoreText'>See more</div>
        </button>
    </section>
  )
}

export default Works