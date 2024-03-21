/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../Stylesheets/Navbar.css';
import { BiSolidMessage } from "react-icons/bi";
import {Link} from 'react-router-dom';
// import {Link} from 'react-scroll';
import Img from '../assets/ALogo.png';
import { TiThMenu } from "react-icons/ti";

function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className='NVConatiner'>
        <Link to='/'>
        <img className='NVLogo' src={Img} alt='Logo'/>
        </Link>
        <div className='NVMenu'>
            <a href='/' className='NVMenuItem'>Home</a>
            <a href='/projects/' className='NVMenuItem'>Projects</a>
            <a href='/certifications/' className='NVMenuItem'>Certifications</a>
            <a href='https://github.com/arohidsilva' className='NVMenuItem' target="_blank">GitHub</a>
        </div>
        <TiThMenu className='NVBurger' onClick={()=>setMenu(!menu)}/>
        {menu?
        <>
          <section className='NVAltMenu'>
            <a href='/' className='NVAltItem'>Home</a>
            <a href='/projects/' className='NVAltItem'>Projects</a>
            <a href='/certifications/' className='NVAltItem'>Certifications</a>
            <a href='https://github.com/arohidsilva' className='NVAltItem' target="_blank">GitHub</a>
          </section>
        </>:
        <></>}

    </nav>
  )
}

export default Navbar