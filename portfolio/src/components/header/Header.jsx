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
          <h4 className="text-light">Cześć! Nazywam się</h4>
          <h1>Mateusz</h1>
          <h4>Jestem frontend developerem</h4>

          <Actions />
        </div>
        
        <Socials />

      </div>
    </header>
  )
}

export default Header;