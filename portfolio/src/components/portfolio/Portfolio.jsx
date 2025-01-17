import React from 'react';
import './portfolio.css';
import { img1, img2, img3, img4, img5, img6, img7, img8, img9 } from '../../assets/GymApp';
import { img1_18, img2_18, img3_18, img4_18, img5_18, img6_18, img7_18 } from '../../assets/JustTravel18';
import { img1_10, img2_10, img3_10, img4_10, img5_10, img6_10, img7_10 } from '../../assets/JustTravel10';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

/** Projekty */

const Portfolio = () => {

  const projects = [
    {
      titleHtml: '<strong>JustTravel</strong> <br> Aplikacja do tworzenia podrózy',
      technology: 'Angular 18 + TypeScript',
      href: 'https://github.com/matCh00/JustTravel-Angular18',
      images: [img1_18, img2_18, img3_18, img4_18, img5_18, img6_18, img7_18],
      carouselClass: 'portfolio__carousel-desktop',
      desktop: false
    },
    {
      titleHtml: '<strong>JustTravel</strong> <br> Aplikacja do tworzenia podrózy',
      technology: 'Angular 10 + TypeScript',
      href: 'https://github.com/matCh00/JustTravel-Angular10',
      images: [img1_10, img2_10, img3_10, img4_10, img5_10, img6_10, img7_10],
      carouselClass: 'portfolio__carousel-desktop',
      desktop: false
    },
    {
      titleHtml: '<strong>GymApp</strong> <br> Aplikacja mobilna do zarządzania oraz monitorowania treningów',
      technology: 'React Native + TypeScript + Firebase',
      href: 'https://github.com/matCh00/GymApp',
      images: [img1, img2, img3, img4, img5, img6, img7, img8, img9],
      carouselClass: 'portfolio__carousel-mobile',
      desktop: false
    },
  ]

  return (
    <section id='portfolio'>

      <h5>Moje projekty</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {projects.map(project => {
          return (

            <article key={project.titleHtml} className={project.desktop ? 'portfolio__item portfolio__item-desktop' : 'portfolio__item'}>

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