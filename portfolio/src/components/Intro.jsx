/* eslint-disable no-unused-vars */
import React from 'react';
import '../Stylesheets/Intro.css';
import imgmail from '../assets/Gmail.png';
import imglinkedin from '../assets/Linkedin.png';
import imggithub from '../assets/Github.png';
import img1 from '../assets/Picture.png';
import Typewriter from 'typewriter-effect';

function Intro() {
  return (
    <div id='intro' className='row'>      
        <div className='INContent col-12 col-md-6 '>
            <div className=''>
            <span className='INHello'>Hello,</span>
            <span className='INIntro'>I&#39;m  &nbsp;<span className='INName'>
            <Typewriter 
                onInit={(typewriter)=>{
                  typewriter.typeString(" Ar")
                  .pauseFor(100)
                  .typeString("ohi")
                  .pauseFor(200)
                  .typeString("!")
                  .start()
                }}

                options={{
                  wrapperClassName : 'typewritercss'
                }}
              />
              </span></span>
              {/* <br /> */}
              <span className='INIntro'>Web Developer</span>
            <p className='INPara'>A web wizard specialized in transforming code into responsive and intuitive web wonders. Let&apos;s build the extraordinary together.</p>
            <div className='INVias d-flex'>
              <a href='mailto:arohidsilva311@gmail.com'>
                <button className='INVia'>
                  <img className='INViaLogo1' src={imgmail} alt='gmaillogo'></img>
                </button>
              </a>
              <a href='https://www.linkedin.com/in/arohi-dsilva-6a7480221/' target="_blank">
                <button className='INVia'>
                  <img className='INViaLogo' src={imglinkedin} alt='gmaillogo'></img>
                </button>
              </a>
              <a href='https://github.com/arohidsilva' target="_blank">
                <button className='INVia'>
                  <img className='INViaLogo' src={imggithub} alt='gmaillogo'></img>
                </button>
              </a>
            </div>
        </div>
        </div>
        <img className='INPicture col-12 col-md-6' src={img1} alt='Picture'/>
    </div>
    
  )
}

export default Intro