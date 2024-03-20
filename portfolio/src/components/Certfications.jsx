/* eslint-disable no-unused-vars */
import React from 'react';
import '../Stylesheets/Certifications.css';
import imggc from '../assets/GC.png';
import imgcc from '../assets/CC.png';
import imggl from '../assets/GL.png';
import imgds from '../assets/DataScienceLogo.png';
import imgpy from '../assets/PythonLogo.png';
import imgtab from '../assets/Tableau.png';
import imgr from '../assets/RLogo.png';
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
                <h4>Data Visualization using Tableau</h4>
                <div className='CRSponser'>
                    <img className='CRImg' src={imggl} alt='Certficate'/>
                    <p>Great Learning</p>
                </div> 
                <img className='CRTechLogo' src={imgtab} alt='Logo'/>   
            </div>
            <div className='CRItem'>
                <h4>Python 101 for Data Science</h4>
                <div className='CRSponser'>
                    <img className='CRImg' src={imgcc} alt='Certficate'/>
                    <p>Cognitive Class</p>
                </div> 
                <img className='CRTechLogo' src={imgds} alt='Logo'/>   
            </div>
            <div className='CRItem'>
                <h4>Prediction Project using Python</h4>
                <div className='CRSponser'>
                    <img className='CRImg' src={imggl} alt='Certficate'/>
                    <p>Great Learning</p>
                </div> 
                <img className='CRTechLogo' src={imgpy} alt='Logo'/>
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
                <h4>R 101</h4>
                <div className='CRSponser'>
                    <img className='CRImg' src={imgcc} alt='Certficate'/>
                    <p>Cognitive Class</p>
                </div> 
                <img className='CRTechLogo' src={imgr} alt='Logo'/> 
            </div>

        </div>
    </div>
    <Footer/ >
    </div>
  )
}

export default Certfications