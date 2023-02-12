import React from 'react';
import './header.css';
import Actions from './Actions';
import ME from '../../assets/me.jpg';
import Socials from './Socials';

/** Nagłówek */

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">

        <div className="me">
          <img src={ME} alt="me" className='me__img'/>
        </div>

        <div className='header__content'>
          <h5>Cześć! Nazywam się</h5>
          <h1>Mateusz</h1>
          <h5 className="text-light">Frontend developer</h5>

          <Actions />
        </div>
        
        <Socials />

      </div>
    </header>
  )
}

export default Header;