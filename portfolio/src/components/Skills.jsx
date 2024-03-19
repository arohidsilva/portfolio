/* eslint-disable no-unused-vars */
import React from 'react';
import '../Stylesheets/Skills.css';
import ImgReact from '../assets/ReactLogo.png';
import ImgJS from '../assets/JSLogo.png';
import ImgHTML from '../assets/HTMLLogo.png';
import ImgCSS from '../assets/CSS.png';
import ImgVSC from '../assets/VSCLogo.png';
import ImgTableau from '../assets/TableauLogo.png';
import { FaExternalLinkSquareAlt } from "react-icons/fa";


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
                            <span>React JS</span>
                        </div>
                    </div>
                    <div className='SKBar'>
                        <img className='SKImg' src={ImgJS} alt='skilllogo'/>
                        <div className='SKText'>
                            <span>JavaScript</span>
                        </div>
                    </div>
                    <div className='SKBar'>
                        <img className='SKImg' src={ImgHTML} alt='skilllogo'/>
                        <div className='SKText'>
                            <span>HTML</span>
                        </div>
                    </div>
                    <div className='SKBar'>
                        <img className='SKImg' src={ImgCSS} alt='skilllogo'/>
                        <div className='SKText'>
                            <span>CSS</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='SKSkill'>
                <span className='SKCategory'>Tools</span>
                <div className='SKBars'>
                    <div className='SKBar'>
                        <img className='SKImg' src={ImgVSC} alt='skilllogo'/>
                        <div className='SKText'>
                            <span>VS Code</span>
                        </div>
                    </div>
                    <div className='SKBar'>
                        <img className='SKImg' src={ImgTableau} alt='skilllogo'/>
                        <div className='SKText'>
                            <span>Tableau</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='SKLinks'>
            <a href=''>
                <div className='SKLink'>
                    Projects <FaExternalLinkSquareAlt className='SKLinkLogo'/>
                </div>
            </a>
            <a href=''>
                <div className='SKLink'>
                    Certifications <FaExternalLinkSquareAlt className='SKLinkLogo'/>
                </div>
            </a>
        </div>
    </section>
  )
}

export default Skills