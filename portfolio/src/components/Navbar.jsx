/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../Stylesheets/Navbar.css';
import { BiSolidMessage } from "react-icons/bi";
import {Link} from 'react-router-dom';
// import {Link} from 'react-scroll';
import Img from '../assets/Logo1.gif';
import { TiThMenu } from "react-icons/ti";

function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className='NVConatiner'>
        <Link to='/'>
        <img className='NVLogo' src={Img} alt='Logo'/>
        </Link>
        <div className='NVMenu'>
            <Link to='/' className='NVMenuItem'>Home</Link>
            <Link to='/projects/' className='NVMenuItem'>Projects</Link>
            <Link to='/certifications/' className='NVMenuItem'>Certifications</Link>
            <a href='https://github.com/arohidsilva' className='NVMenuItem' target="_blank">GitHub</a>
        </div>
        <TiThMenu className='NVBurger' onClick={()=>setMenu(!menu)}/>
        {menu?
        <>
          <section className='NVAltMenu'>
            <Link to='/' className='NVAltItem'>Home</Link>
            <Link to='/projects/' className='NVAltItem'>Projects</Link>
            <Link to='/certifications/' className='NVAltItem'>Certifications</Link>
            <a href='https://github.com/arohidsilva' className='NVAltItem' target="_blank">GitHub</a>
          </section>
        </>:
        <></>}

    </nav>
  )
}

export default Navbar
