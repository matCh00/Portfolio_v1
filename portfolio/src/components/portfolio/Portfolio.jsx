import React from 'react';
import './portfolio.css';
import { img1, img2, img3, img4, img5, img6, img7, img8, img9 } from '../../assets/GymApp';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

/** Projekty */

const Portfolio = () => {

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <section id='portfolio'>

      <h5>Moje projekty</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">

          <div className="portfolio__description">
            <h3 dangerouslySetInnerHTML={{__html: '<strong>GymApp</strong> <br> Aplikacja mobilna do zarządzania oraz monitorowania treningów'}}></h3>
            
            <h4>React Native + TypeScript + Firebase</h4>

            <div className="portfolio__item-btn">
              <a href="https://github.com/matCh00/GymApp" target={'_blank'} className='btn'> GitHub </a>
            </div>
          </div>

          <div className="carousel">
            <Carousel 
              className='portfolio__carousel'
              showStatus={false} 
              showThumbs={false} 
              autoPlay={true} 
              infiniteLoop={true}
              interval={3000}
              transitionTime={1000}
              stopOnHover={true}
              swipeable={true}
              emulateTouch={true}
            >
              {images.map(i => {
                return (
                  <div key={i} className='portfolio__image-container'>
                    <img src={i} className='portfolio__image' />
                  </div>
                )
              })}
            </Carousel>
          </div>

        </article>
        
      </div>
    </section>
  )
}

export default Portfolio;