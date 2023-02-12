import React, { useState } from 'react';
import './nav.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';

/** Pasek nawigacji */

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  const handleClick = (key) => {
    setActiveNav(key);
  }

  const checkIsActive = (key) => {
    if (activeNav === key)
      return 'active';
    return '';
  }

  return (
    <nav>

      <a href="#" 
        onClick={() => {handleClick('#')}} 
        className={checkIsActive('#')}
      ><AiOutlineHome/></a>

      <a href="#about" 
        onClick={() => {handleClick('#about')}} 
        className={checkIsActive('#about')}
      ><AiOutlineUser/></a>

      <a href="#experience" 
        onClick={() => {handleClick('#experience')}} 
        className={checkIsActive('#experience')}
      ><BiBook/></a>

      <a href="#services" 
        onClick={() => {handleClick('#services')}} 
        className={checkIsActive('#services')}
      ><RiServiceLine/></a>

      <a href="#contact" 
        onClick={() => {handleClick('#contact')}} 
        className={checkIsActive('#contact')}
      ><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Nav;