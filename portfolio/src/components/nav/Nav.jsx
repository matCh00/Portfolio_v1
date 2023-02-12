import React, { useEffect, useState, useLayoutEffect } from 'react';
import './nav.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';

/** Pasek nawigacji */

const Nav = () => {

  /** położenie sekcji */
  const [headerRect, setHeaderRect] = useState({top: 0, height: 0});
  const [aboutRect, setAboutRect] = useState({top: 0, height: 0});
  const [experienceRect, setExperienceRect] = useState({top: 0, height: 0});
  const [servicesRect, setServicesRect] = useState({top: 0, height: 0});
  const [portfolioRect, setPortfolioRect] = useState({top: 0, height: 0});
  const [testimonialsRect, setTestimonialsRect] = useState({top: 0, height: 0});
  const [contactRect, setContactRect] = useState({top: 0, height: 0});


  /** aktywna ikonka */
  const [activeNav, setActiveNav] = useState('#');

  const highlight = (key) => {
    setActiveNav(key);
  }

  const checkIsActive = (key) => {
    if (activeNav === key)
      return 'active';
    return '';
  }


  /** podświetlanie sekcji */
  const handleScroll = () => {
    let s = window.scrollY;
    let aboutTop = headerRect.height;
    let experienceTop = headerRect.height + aboutRect.height;
    let servicesTop = headerRect.height + aboutRect.height + experienceRect.height;
    let contactTop = headerRect.height + aboutRect.height + experienceRect.height + servicesRect.height;

    if (s + aboutRect.height/2 >= aboutTop && s + aboutRect.height/2 < experienceTop) 
      highlight('#about');
    else if (s + experienceRect.height/2 >= experienceTop && s + experienceRect.height/2 < servicesTop) 
      highlight('#experience');
    else if (s + servicesRect.height/2 >= servicesTop && s + servicesRect.height/2 < contactTop) 
      highlight('#services');
    else if (s + contactRect.height/2 >= contactTop) 
      highlight('#contact');
    else if (s + headerRect.height/2 < experienceTop)
      highlight('#');
    else 
      highlight('');
  }


  /** ustawienie koordynatów */
  const setPos = () => {
    setHeaderRect({top: document.getElementById('header').getBoundingClientRect().top, height: document.getElementById('header').getBoundingClientRect().height});
    setAboutRect({top: document.getElementById('about').getBoundingClientRect().top, height: document.getElementById('about').getBoundingClientRect().height});
    setExperienceRect({top: document.getElementById('experience').getBoundingClientRect().top, height: document.getElementById('experience').getBoundingClientRect().height});
    setServicesRect({top: document.getElementById('services').getBoundingClientRect().top, height: document.getElementById('services').getBoundingClientRect().height});
    setPortfolioRect({top: document.getElementById('portfolio').getBoundingClientRect().top, height: document.getElementById('portfolio').getBoundingClientRect().height});
    setTestimonialsRect({top: document.getElementById('testimonials').getBoundingClientRect().top, height: document.getElementById('testimonials').getBoundingClientRect().height});
    setContactRect({top: document.getElementById('contact').getBoundingClientRect().top, height: document.getElementById('contact').getBoundingClientRect().height});
  }


  /** początkowe ustawnienie wymiarów */
  useLayoutEffect(() => {
    setPos();
  }, []);


  /** nasłuciwanie scrollowania */
  useEffect(() => {
    const onScroll = () => {
      handleScroll();
    }
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [window.scrollY]);


  /** nasłuchiwanie zmiany wymiarów strony */
  useEffect(() => {
    const handleResize = () => {
      setPos();
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window]);


  return (
    <nav>

      <a href="#" 
        // onClick={() => {highlight('#')}} 
        className={checkIsActive('#')}
      ><AiOutlineHome/></a>

      <a href="#about" 
        // onClick={() => {highlight('#about')}} 
        className={checkIsActive('#about')}
      ><AiOutlineUser/></a>

      <a href="#experience" 
        // onClick={() => {highlight('#experience')}} 
        className={checkIsActive('#experience')}
      ><BiBook/></a>

      <a href="#services" 
        // onClick={() => {highlight('#services')}} 
        className={checkIsActive('#services')}
      ><RiServiceLine/></a>

      <a href="#contact" 
        // onClick={() => {highlight('#contact')}} 
        className={checkIsActive('#contact')}
      ><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Nav;