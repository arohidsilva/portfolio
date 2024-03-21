/* eslint-disable no-unused-vars */
import React from 'react';
import '../Stylesheets/Works.css';
import imgcass from '../assets/CASS.jpg';
import imgrec from '../assets/ImgRec.jpg';
import imgpoke from '../assets/Poke.jpg';
import imgsplitit from '../assets/Splitit.jpg';
import Navbar from './Navbar';
import Footer from './Footer';

function Works() {
  return (
    <div><Navbar />
    <div id='works'>
        <span className='WKTitle'>Projects</span>
        <div className='WKGroup'>
          <div className='WKItem'>
            <img className='WKImg' src={imgcass} alt='projectlogo'/>
            <h4>CA Management System</h4>
            <p>A web application with CA Management system using  Visual studio, C#, HTML/CSS, JavaScript and MySQL 5.0.</p>
          </div>
          <div className='WKItem'>
            <img className='WKImg' src={imgrec} alt='projectlogo'/>
            <h4>Image-Infinity</h4>
            <p>Image Recognition and Identification System on AWS using S3 Bucket, Rekognition, DynamoDB, Lambda and RDS.</p>
          </div>
          <div className='WKItem'>
            <img className='WKImg' src={imgpoke} alt='projectlogo'/>
            <h4>Pokédex</h4>
            <p>A responsive webpage with Pokémon data using React JS.</p>
          </div>
          <div className='WKItem'>
            <img className='WKImg' src={imgsplitit} alt='projectlogo'/>
            <h4>Split-it</h4>
            <p>A responsive webpage to track expenses using React JS and Firebase.</p>
          </div>
        </div>
    </div>
    <Footer/ >
    </div>
  )
}

export default Works