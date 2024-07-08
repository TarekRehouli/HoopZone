import React from 'react'
import './About.css'
import court_img from '../../assets/court_1.jpg'
const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={court_img} alt="" className='court-img' />
      </div>
      <div className="about-right">
        <h3>Interior Court</h3>
        <h2>HoopZone Arena</h2>
        <p>La HoopZone Arena est un terrain de basketball intérieur moderne et bien équipé, idéal pour les équipes professionnelles, les clubs d'entraînement, et les parties amicales. Ce terrain est parfait pour ceux qui recherchent un environnement contrôlé et confortable, quelles que soient les conditions météorologiques extérieures.</p>
        <p>La climatisation assure un confort optimal, quel que soit le temps à l'intérieur. L'éclairage est un système de haute qualité pour des jeux en soirée et des entraînements prolongés. La surface de jeu est un parquet en bois professionnel offrant une excellente adhérence et réduisant les risques de blessures. Les vestiaires sont des installations spacieuses avec douches et casiers pour les joueurs. Les gradins ont une capacité d'accueil pour les spectateurs, parfaite pour les matchs de ligue ou les événements spéciaux. L'équipement inclut des panneaux d'affichage électronique pour le score et les temps, ainsi que des paniers réglables en hauteur.</p>
      </div>
    </div>
    

    
  )
}

export default About
