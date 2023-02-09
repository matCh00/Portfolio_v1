import React from 'react';
import CV from '../../assets/cv.pdf';
import './actions.css';

/** akcje w nagłówku */

const Actions = () => {
  return (
    <div className='actions'>

      <a href={CV} download className='btn btn-primary'>Pobierz CV</a>
      <a href="#contact" className='btn'>Szybka wiadomość</a>

    </div>
  )
}

export default Actions;