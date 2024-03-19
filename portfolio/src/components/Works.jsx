/* eslint-disable no-unused-vars */
import React from 'react';
import '../Stylesheets/Works.css';
import work1 from '../assets/port1.png';
import work2 from '../assets/port2.png';
import work3 from '../assets/port3.png';

function Works() {
  return (
    <section id='works'>
        <span className='WKTitle'>My portfolio</span>
        <span className='WKPara'>I take my pride in paying attention to the smallest details and making sure that my work is perfect. I am excited ti bring my skills and experiances to help business achive their goals and create a strong online presence.</span>
        <div className='WKImgGroup'>
          <img className='WKImg' src={work1} alt='projectlogo'/>
          <img className='WKImg' src={work2} alt='projectlogo'/>
          <img className='WKImg' src={work3} alt='projectlogo'/>
        </div>
    </section>
  )
}

export default Works