import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsLinkedin, BsGithub} from 'react-icons/bs';

/** Kontakt */

const Contact = () => {
  return (
    <section id='contact'>

      <h5>Skontaktujmy się</h5>
      <h2>Kontakt</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mateusz.chalik@gmail.com</h5>
            <a href="mailto:mateusz.chalik@gmail.com">Wyślij wiadomość</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Mateusz Chalik</h5>
            <a href="https://m.me/mateusz.chalik">Wyślij wiadomość</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Mateusz Chalik</h5>
            <a href="https://www.linkedin.com/in/mateusz-chalik-559813233/" target='_blank'>Zobacz profil</a>
          </article>

          <article className="contact__option">
            <BsGithub className='contact__option-icon'/>
            <h4>GitHub</h4>
            <h5>matCh00</h5>
            <a href="https://github.com/matCh00" target='_blank'>Zobacz profil</a>
          </article>

        </div>
      </div>

    </section>
  )
}

export default Contact;