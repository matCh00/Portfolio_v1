import React from 'react';
import './header.css';
import Actions from './Actions';
import ME from '../../assets/me.jpg';

/** Nagłówek */

const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <h5>Cześć! Nazywam się</h5>
        <h1>Mateusz</h1>
        <h5 className="text-light">Jestem frontend developerem</h5>

        <Actions />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scrol__down'>Kontakt</a>

      </div>
    </header>
  )
}

export default Header;