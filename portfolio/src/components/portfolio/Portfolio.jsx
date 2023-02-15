import React from 'react';
import './portfolio.css';
import { img1, img2, img3, img4, img5, img6, img7, img8, img9 } from '../../assets/GymApp';
import { pc1, pc2, pc3, pc4, pc5, pc6 } from '../../assets/Portfolio';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

/** Projekty */

const Portfolio = () => {

  const projects = [
    {
      titleHtml: '<strong>GymApp</strong> <br> Aplikacja mobilna do zarządzania oraz monitorowania treningów',
      technology: 'React Native + TypeScript + Firebase',
      href: 'https://github.com/matCh00/GymApp',
      images: [img1, img2, img3, img4, img5, img6, img7, img8, img9],
      carouselClass: 'portfolio__carousel-mobile',
      desktop: false
    },
    {
      titleHtml: '<strong>Portfolio</strong> <br> Własna strona internetowa',
      technology: 'React + JavaScript + CSS',
      href: 'https://github.com/matCh00/Portfolio',
      images: [pc1, pc2, pc3, pc4, pc5, pc6],
      carouselClass: 'portfolio__carousel-desktop',
      desktop: true
    }
  ]

  return (
    <section id='portfolio'>

      <h5>Moje projekty</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {projects.map(project => {
          return (

            <article className={project.desktop ? 'portfolio__item portfolio__item-desktop' : 'portfolio__item'}>

              <div className="portfolio__description">
                <h3 dangerouslySetInnerHTML={{__html: project.titleHtml}}></h3>
                
                <h4>{project.technology}</h4>

                <div className="portfolio__item-btn">
                  <a href={project.href} target={'_blank'} className='btn'> GitHub </a>
                </div>
              </div>

              <div className="carousel">
                <Carousel 
                  className={project.carouselClass}
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
                  {project.images.map(i => {
                    return (
                      <div key={i} className='portfolio__image-container'>
                        <img src={i} className='portfolio__image' />
                      </div>
                    )
                  })}
                </Carousel>
              </div>

            </article>
            
          )
        })}
        
      </div>
    </section>
  )
}

export default Portfolio;