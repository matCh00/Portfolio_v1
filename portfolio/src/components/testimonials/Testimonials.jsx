import React from 'react';
import './testimonials.css';
import AVTR from '../../assets/personal/avatar.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

/** Opinie */

const Testimonials = () => {

  const clients = [
    {
      avatar: AVTR,
      name: 'Dobry Klient',
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium fugiat quod, esse est iste molestias porro ipsa possimus corrupti culpa cupiditate nesciunt debitis aspernatur fuga provident obcaecati corporis consequuntur."
    },
    {
      avatar: AVTR,
      name: 'Spoko Klient',
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium fugiat quod, esse est iste molestias porro ipsa possimus corrupti culpa cupiditate nesciunt debitis aspernatur fuga provident obcaecati corporis consequuntur."
    },
    {
      avatar: AVTR,
      name: 'Uczciwy Klient',
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium fugiat quod, esse est iste molestias porro ipsa possimus corrupti culpa cupiditate nesciunt debitis aspernatur fuga provident obcaecati corporis consequuntur."
    }
  ]

  return (
    <section id='testimonials'>

      <h5>Recenzje klientów</h5>
      <h2>Opinie</h2>

      <div className="container testimonials__container">

        <Carousel 
          className='testimonial__carousel'
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
          {clients.map(({avatar, name, review}, index)=> {
            return (
              <article key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
              </article>
            )
          })}
        </Carousel>

      </div>
    </section>
  )
}

export default Testimonials;