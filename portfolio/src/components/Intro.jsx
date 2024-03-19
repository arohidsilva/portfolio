/* eslint-disable no-unused-vars */
import React from 'react';
import '../Stylesheets/Intro.css';
import { Link } from 'react-scroll';
import { PiBagSimpleFill } from "react-icons/pi";
import img1 from '../assets/Picture.png';

function Intro() {
  return (
    <section id='intro'>
        <div className='INContent'>
            <span className='INHello'>Hello,</span>
            <span className='INIntro'>I'm <span className='INName'>Arohi</span><br />Web Developer</span>
            <p className='INPara'>To secure a challenging position in a reputable <br/> organization to expand my knowledge, and skills.</p>
            <a href=''>
                <button className='INHire d-flex'>
                    <PiBagSimpleFill className='INHireLogo'/><div className='INHireText'>Hire Me</div>
                </button>
            </a>
        </div>
        <img className='INPicture'src={img1} alt='Picture'/>
    </section>
    
  )
}

export default Intro