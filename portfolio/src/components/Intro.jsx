/* eslint-disable no-unused-vars */
import React from 'react';
import '../Stylesheets/Intro.css';
import imgmail from '../assets/Gmail.png';
import imglinkedin from '../assets/Linkedin.png';
import imggithub from '../assets/Github.png';
import img1 from '../assets/Picture.png';

function Intro() {
  return (
    <section id='intro'>
        <div className='INContent'>
            <span className='INHello'>Hello,</span>
            <span className='INIntro'>I&#39;m <span className='INName'>Arohi</span><br />Web Developer</span>
            <p className='INPara'>To secure a challenging position in a reputable <br/> organization to expand my knowledge, and skills.</p>
            <div className='INVias d-flex'>
              <a href='mailto:arohidsilva311@gmail.com'>
                <button className='INVia'>
                  <img className='INViaLogo1' src={imgmail} alt='gmaillogo'></img>
                </button>
              </a>
              <a href='https://www.linkedin.com/in/arohi-dsilva-6a7480221/'>
                <button className='INVia'>
                  <img className='INViaLogo' src={imglinkedin} alt='gmaillogo'></img>
                </button>
              </a>
              <a href='https://github.com/arohidsilva'>
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