import React from 'react';
import './about.css';
import {FaAward} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';

/** O mnie */

const About = () => {
  return (
    <section id='about'>

      <h5>Dowiedz się więcej</h5>
      <h2>O mnie</h2>

      <div className="container about__container">
        <div className="about__cards">

          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Doświadczenie</h5>
            <small>9 miesięcy pracy</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projekty</h5>
            <small>kilka projektów</small>
          </article>

        </div>

        <p>
          Mam 0.5 roku doświadczenia w branży IT na stanowisku frontend developera. Pracuję w technologii Angular.
          Poza pracą napisałem kilka projektów na uczelni w różnych językach programowania.
          Pracę inżynierską napisałem dla odmiany w React Native, była to aplikacja mobilna do treningów.
        </p>

        <a href="#contact" className='btn btn-primary'>Zadaj pytanie</a>
      </div>

    </section>
  )
}

export default About;