/* eslint-disable no-unused-vars */
import React from 'react';
import '../Stylesheets/Certifications.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Certfications() {
  return (
    <div><Navbar />
    <div id='certifications'>
        <span className='CRTitle'>Certifications</span>
        <div className='CRGroup'>
            <div className='CRItem'>
                <div className='CRCert'>
                    <img className='CRImg' src='' alt='Certficate'/>
                    <div>
                        <h4>Associate Cloud Engineer</h4>
                        <p>Google Cloud</p>
                    </div>
                </div>     
            </div>
            <div className='CRItem'>
                <div className='CRCert'>
                    <img className='CRImg' src='' alt='Certficate'/>
                    <div>
                        <h4>Data Visualization using Tableau</h4>
                        <p>Great Learning</p>
                    </div>
                </div>     
            </div>
            <div className='CRItem'>
                <div className='CRCert'>
                    <img className='CRImg' src='' alt='Certficate'/>
                    <div>
                        <h4>Python 101 for Data Science</h4>
                        <p>Cognitive Class</p>
                    </div>
                </div>     
            </div>
            <div className='CRItem'>
                <div className='CRCert'>
                    <img className='CRImg' src='' alt='Certficate'/>
                    <div>
                        <h4>Prediction Project using Python</h4>
                        <p>Great Learning</p>
                    </div>
                </div>     
            </div>
            <div className='CRItem'>
                <div className='CRCert'>
                    <img className='CRImg' src='' alt='Certficate'/>
                    <div>
                        <h4>Analytics with SQL and Python</h4>
                        <p>Great Learning</p>
                    </div>
                </div>     
            </div>
            <div className='CRItem'>
                <div className='CRCert'>
                    <img className='CRImg' src='' alt='Certficate'/>
                    <div>
                        <h4>R 101</h4>
                        <p>Cognitive Class</p>
                    </div>
                </div>     
            </div>

        </div>
    </div>
    <Footer/ >
    </div>
  )
}

export default Certfications