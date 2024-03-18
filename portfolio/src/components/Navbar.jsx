/* eslint-disable no-unused-vars */
import React from 'react';
import '../Stylesheets/Navbar.css';
import { BiSolidMessage } from "react-icons/bi";
import {Link} from "react-scroll";
import Img from '../assets/Logo2.png';

function Navbar() {
  return (
    <nav className='NVConatiner'>
        <img className='NVLogo' src={Img} alt='Logo'/>
        <div className='NVMenu'>
            <Link className='NVMenuItem'>Home</Link>
            <Link className='NVMenuItem'>About</Link>
            <Link className='NVMenuItem'>Portfolio</Link>
            <Link className='NVMenuItem'>Clients</Link>
        </div>
        <button className='NVContact d-flex'>
            <BiSolidMessage className='NVContactLogo'/>
            <div className='NVContactText'>Contact Me</div>
        </button>
    </nav>
  )
}

export default Navbar