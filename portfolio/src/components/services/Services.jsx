import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

/** Usługi */

const Services = () => {

  const services = [
    {key: 'Implementacja GUI w technologii Angular', values: [
      {key: 'Tworzenie aplikacji typu MPA'},
      {key: 'Znajomość PrimeNg'},
      {key: 'Znajomość Primeflex'},
      {key: 'Znajomość RxJS'},
      {key: 'Dobre praktyki programowania'},
      {key: 'Dobre praktyki UI/UX'},
    ]},
    {key: 'Implementacja GUI w technologii React', values: [
      {key: 'Tworzenie aplikacji typu SPA'},
      {key: 'Znajomość hooków'},
      {key: 'Komponnty funkcyjne'},
    ]},
    {key: 'Implementacja GUI w technologii React Native', values: [
      {key: 'Tworzenie aplikacji mobilnej'},
      {key: 'Responsywność interfejsu'},
      {key: 'Znajomość hooków'},
    ]}
  ]
  return (
    <section id='services'>

      <h5>Co oferuję</h5>
      <h2>Usługi</h2>

      <div className="container services__container">

        {services.map(s => {
          return (
            <article className="service" key={s.key}>
              <div className="service__head">
                <h3>{s.key}</h3>
              </div>

              <ul className="service__list">
                {s.values.map(v => {
                  return (
                    <li key={v.key}>
                      <BiCheck className='service__list-icon' />
                      <p>{v.key}</p>
                    </li>
                  )
                })}
                
              </ul>
            </article>
          )
        })}
        
      </div>

    </section>
  )
}

export default Services;