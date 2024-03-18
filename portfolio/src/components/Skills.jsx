/* eslint-disable no-unused-vars */
import React from 'react';
import '../Stylesheets/Skills.css';
import ImgReact from '../assets/ReactLogo.png'
import ImgJS from '../assets/JSLogo.png'
import ImgHTML from '../assets/HTMLLogo.png'
import ImgCSS from '../assets/CSS.png'

function Skills() {
  return (
    <section id='secskills'>
        <span className='SKTitle'>What I do</span>
        <span className='SKPara'>I am a skilled and passionate web designer with experience in creating responsive and user friendly web applications. I have strong understanding of strong understanding of design and keen eye on detail. I am proficient in React.js, JavaScript, HTML and CSS as well as Analytical skills such as Python, SQL and Tableau.</span>
        <div className='SKBars'>
            <div className='SKBar'>
                <img className='SKImg' src={ImgReact} alt='skilllogo'/>
                <div className='SKText'>
                    <h2>React JS</h2>
                    <p>Demo text. Write you own content.</p>
                </div>
            </div>
            <div className='SKBar'>
                <img className='SKImg' src={ImgJS} alt='skilllogo'/>
                <div className='SKText'>
                    <h2>JavaScript</h2>
                    <p>Demo text. Write you own content.</p>
                </div>
            </div>
            <div className='SKBar'>
                <img className='SKImg' src={ImgHTML} alt='skilllogo'/>
                <div className='SKText'>
                    <h2>HTML</h2>
                    <p>Demo text. Write you own content.</p>
                </div>
            </div>
            <div className='SKBar'>
                <img className='SKImg' src={ImgCSS} alt='skilllogo'/>
                <div className='SKText'>
                    <h2>CSS</h2>
                    <p>Demo text. Write you own content.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills