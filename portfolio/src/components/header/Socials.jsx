import React from 'react';
import './socials.css';
import {BsLinkedin, BsGithub} from 'react-icons/bs';

const Socials = () => {
  return (
    <div className='socials'>

      <a href="https://www.linkedin.com/in/mateusz-chalik-559813233/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/matCh00" target='_blank'><BsGithub/></a>

    </div>
  )
}

export default Socials;