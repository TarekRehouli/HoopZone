import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

const translations = {
  en: {
    welcome: '─ WELCOME TO THE ─',
    title: 'HoopZone',
    description: 'Elevate Your Game, Anytime, Anywhere',
    button: 'Courts Rental'
  },
  fr: {
    welcome: '─ BIENVENUE À LA ─',
    title: 'HoopZone',
    description: 'Élevez Votre Jeu, N\'importe Quand, N\'importe Où',
    button: 'Location de Terrains'
  }
};

const Hero = ({ language }) => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h3>{translations[language].welcome}</h3>
        <h2>{translations[language].title}</h2>
        <p>{translations[language].description}</p>
        <button className='btn'>{translations[language].button} <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
