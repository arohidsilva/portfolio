/* eslint-disable no-unused-vars */
import React from 'react';
import '../Stylesheets/Intro.css';
import { Link } from 'react-scroll';
import { PiBagSimpleFill } from "react-icons/pi";
import imgmail from '../assets/Gmail.png';
import imglinkedin from '../assets/Linkedin.png';
import imggithub from '../assets/Github.png';
import img1 from '../assets/Picture.png';

function Intro() {
  return (
    <section id='intro'>
        <div className='INContent'>
            <span className='INHello'>Hello,</span>
            <span className='INIntro'>I'm <span className='INName'>Arohi</span><br />Web Developer</span>
            <p className='INPara'>To secure a challenging position in a reputable <br/> organization to expand my knowledge, and skills.</p>
            <div className='INVias d-flex'>
              <a href=''>
                <button className='INVia'>
                  <img className='INViaLogo' src={imgmail} alt='gmaillogo'></img>
                </button>
              </a>
              <a href=''>
                <button className='INVia'>
                  <img className='INViaLogo' src={imglinkedin} alt='gmaillogo'></img>
                </button>
              </a>
              <a href=''>
                <button className='INVia'>
                  <img className='INViaLogo' src={imggithub} alt='gmaillogo'></img>
                </button>
              </a>
            </div>
        </div>
        <img className='INPicture'src={img1} alt='Picture'/>
    </section>
    
  )
}

export default Intro