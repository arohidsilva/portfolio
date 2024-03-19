/* eslint-disable no-unused-vars */
import React from 'react';
import '../Stylesheets/Skills.css';
import ImgReact from '../assets/ReactLogo.png'
import ImgJS from '../assets/JSLogo.png'
import ImgHTML from '../assets/HTMLLogo.png'
import ImgCSS from '../assets/CSS.png'

function Skills() {
  return (
    <section id='skills'>
        <span className='SKTitle'>Skills</span>
        <div className='SKSkills'>
            <div className='SKSkill'>
                <span className='SKCategory'>Languages</span>
                <div className='SKBars'>
                    <div className='SKBar'>
                        <img className='SKImg' src={ImgReact} alt='skilllogo'/>
                        <div className='SKText'>
                            <h4>React JS</h4>
                        </div>
                    </div>
                    <div className='SKBar'>
                        <img className='SKImg' src={ImgJS} alt='skilllogo'/>
                        <div className='SKText'>
                            <h4>JavaScript</h4>
                        </div>
                    </div>
                    <div className='SKBar'>
                        <img className='SKImg' src={ImgHTML} alt='skilllogo'/>
                        <div className='SKText'>
                            <h4>HTML</h4>
                        </div>
                    </div>
                    <div className='SKBar'>
                        <img className='SKImg' src={ImgCSS} alt='skilllogo'/>
                        <div className='SKText'>
                            <h4>CSS</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='SKSkill'>
                <span className='SKCategory'>Tools</span>
                <div className='SKBars'>
                    <div className='SKBar'>
                        <img className='SKImg' src={ImgReact} alt='skilllogo'/>
                        <div className='SKText'>
                            <h3>Visual Studio</h3>
                        </div>
                    </div>
                    <div className='SKBar'>
                        <img className='SKImg' src={ImgJS} alt='skilllogo'/>
                        <div className='SKText'>
                            <h3>Tableau</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills