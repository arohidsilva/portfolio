/* eslint-disable no-unused-vars */
import React from 'react';
import '../Stylesheets/Certifications.css';
import imggc from '../assets/GC.png';
import imgli from '../assets/LinkedinColor.png';
import imggl from '../assets/GL.png';
import imgud from '../assets/Udemy.png';
import imgrr from '../assets/ReactwithRedux.png';
import imgmern from '../assets/Mern.png';
import imgtab from '../assets/Tableau.png';
import imgcopilot from '../assets/Copilot.png';
import imgsql from '../assets/SQLLogo.png';
import imgcloud from '../assets/CloudLogo.png';
import Navbar from './Navbar';
import Footer from './Footer';

function Certfications() {
  return (
    <div><Navbar />
    <div id='certifications'>
        <span className='CRTitle'>Certifications</span>
        <div className='CRGroup'>
            <div className='CRItem'>
                <h4>Associate Cloud Engineer</h4>
                <div className='CRSponser'>
                    <img className='CRImg' src={imggc} alt='Certficate'/>
                    <p>Google Cloud</p>
                </div>
                <img className='CRTechLogo' src={imgcloud} alt='Logo'/>   
            </div>
            <div className='CRItem'>
                <h4>Modern React with Redux</h4>
                <div className='CRSponser'>
                    <img className='CRImg' src={imgud} alt='Certficate'/>
                    <p>Udemy</p>
                </div> 
                <img className='CRTechLogo' src={imgrr} alt='Logo'/>   
            </div>
            <div className='CRItem'>
                <h4>Full Stack Web Development with MERN Stack & GenAI</h4>
                <div className='CRSponser'>
                    <img className='CRImg' src={imgud} alt='Certficate'/>
                    <p>Udemy</p>
                </div> 
                <img className='CRTechLogo' src={imgmern} alt='Logo'/>
            </div>
            <div className='CRItem'>
                <h4>Data Visualization using Tableau</h4>
                <div className='CRSponser'>
                    <img className='CRImg' src={imggl} alt='Certficate'/>
                    <p>Great Learning</p>
                </div> 
                <img className='CRTechLogo' src={imgtab} alt='Logo'/>   
            </div>
            <div className='CRItem'>
                <h4>Analytics with SQL and Python</h4>
                <div className='CRSponser'>
                    <img className='CRImg' src={imggl} alt='Certficate'/>
                    <p>Great Learning</p>
                </div> 
                <img className='CRTechLogo' src={imgsql} alt='Logo'/> 
            </div>
            <div className='CRItem'>
                <h4>Practical GitHub Copilot</h4>
                <div className='CRSponser'>
                    <img className='CRImg' src={imgli} alt='Certficate'/>
                    <p>Linkedin</p>
                </div> 
                <img className='CRTechLogo' src={imgcopilot} alt='Logo'/> 
            </div>

        </div>
    </div>
    <Footer/ >
    </div>
  )
}

export default Certfications