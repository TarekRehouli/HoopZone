import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h3>─ WELCOME TO THE ─</h3>
        <h2>HoopZone</h2>
        <p>Elevate Your Game, Anytime, Anywhere</p>
            <button className='btn'>Courts Rental <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero