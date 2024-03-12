/* eslint-disable no-unused-vars */
import React from 'react';
import '../Stylesheets/Navbar.css';
import { BiSolidMessage } from "react-icons/bi";

function Navbar() {
  return (
    <nav className='NVConatiner'>
        <img className='NVLogo' src='' alt='Logo'/>
        <div className='NVMenu'>

        </div>
        <button className='NVContact d-flex'>
            <BiSolidMessage className='NVContactLogo'/>
            <div className='NVContactText'>Contact Me</div>
        </button>
    </nav>
  )
}

export default Navbar