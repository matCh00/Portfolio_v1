import React from 'react';
import './socials.css';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {FaFigma} from 'react-icons/fa';

/** skróty do social mediów */

const Socials = () => {
  return (
    <div className='socials'>

      <a href="https://www.linkedin.com/in/mateusz-chalik-559813233/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/matCh00" target='_blank'><BsGithub/></a>
      <a href="https://www.figma.com/files/user/1208096365060815619?fuid=1208096365060815619" target='_blank'><FaFigma/></a>

    </div>
  )
}

export default Socials;