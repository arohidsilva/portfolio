/* eslint-disable no-unused-vars */
import React from 'react';
import '../Stylesheets/Skills.css';
import ImgReact from '../assets/ReactLogo.png';
import ImgJS from '../assets/JSLogo.png';
import ImgHTML from '../assets/HTMLLogo.png';
import ImgCSS from '../assets/CSS.png';
import ImgVSC from '../assets/VSCLogo.png';
import ImgTableau from '../assets/TableauLogo.png';
import ImgPython from '../assets/Python.png';
import ImgSql from '../assets/SQL.png';
import ImgBootstrap from '../assets/Bootstrap5.jpg';
import ImgGithub from '../assets/Github.png';
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import {Link} from 'react-router-dom';


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
                        <img className='SKImg' src={ImgHTML} alt='skilllogo'/>
                        <div className='SKText'>
                            <span>HTML</span>
                        </div>
                    </div>                    
                    <div className='SKBar'>
                        <img className='SKImg' src={ImgJS} alt='skilllogo'/>
                        <div className='SKText'>
                            <span>JavaScript</span>
                        </div>
                    </div>
                    <div className='SKBar'>
                        <img className='SKImg' src={ImgCSS} alt='skilllogo'/>
                        <div className='SKText'>
                            <span>CSS</span>
                        </div>
                    </div>
                    <div className='SKBar'>
                        <img className='SKImg' src={ImgBootstrap} alt='skilllogo'/>
                        <div className='SKText'>
                            <span>Bootstrap</span>
                        </div>
                    </div>
                    <div className='SKBar'>
                        <img className='SKImg' src={ImgPython} alt='skilllogo'/>
                        <div className='SKText'>
                            <span>Python</span>
                        </div>
                    </div>
                    <div className='SKBar'>
                        <img className='SKImg' src={ImgSql} alt='skilllogo'/>
                        <div className='SKText'>
                            <span>SQL</span>
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
                            <span>VSCode</span>
                        </div>
                    </div>
                    <div className='SKBar'>
                        <img className='SKImg' src={ImgTableau} alt='skilllogo'/>
                        <div className='SKText'>
                            <span>Tableau</span>
                        </div>
                    </div>
                    <div className='SKBar'>
                        <img className='SKImg' src={ImgGithub} alt='skilllogo'/>
                        <div className='SKText'>
                            <span>Git</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='SKLinks row container'>
            <Link to='/projects/' className='col-12 col-md-6 '>
                <div className='SKLink'>
                    Projects <FaExternalLinkSquareAlt className='SKLinkLogo'/>
                </div>
            </Link>
            <Link to='/certifications/' className='col-12 col-md-6'>
                <div className='SKLink'>
                    Certifications <FaExternalLinkSquareAlt className='SKLinkLogo'/>
                </div>
            </Link>
        </div>
    </section>
  )
}

export default Skills
