import React from 'react'
import './About.css'
import court_img from '../../assets/court_1.jpg'

const translations = {
  en: {
    title: 'Interior Court',
    subtitle: 'HoopZone Arena',
    description1: 'HoopZone Arena is a modern and well-equipped indoor basketball court, ideal for professional teams, training clubs, and friendly games. This court is perfect for those seeking a controlled and comfortable environment, regardless of the weather outside.',
    description2: 'The air conditioning ensures optimal comfort, no matter the weather inside. The lighting system is high quality for evening games and extended training sessions. The playing surface is a professional wooden parquet offering excellent grip and reducing the risk of injuries. The locker rooms are spacious facilities with showers and lockers for players. The stands have a seating capacity for spectators, perfect for league matches or special events. The equipment includes electronic scoreboards and timers, as well as adjustable height baskets.'
  },
  fr: {
    title: 'Court Intérieur',
    subtitle: 'HoopZone Arena',
    description1: 'La HoopZone Arena est un terrain de basketball intérieur moderne et bien équipé, idéal pour les équipes professionnelles, les clubs d\'entraînement, et les parties amicales. Ce terrain est parfait pour ceux qui recherchent un environnement contrôlé et confortable, quelles que soient les conditions météorologiques extérieures.',
    description2: 'La climatisation assure un confort optimal, quel que soit le temps à l\'intérieur. L\'éclairage est un système de haute qualité pour des jeux en soirée et des entraînements prolongés. La surface de jeu est un parquet en bois professionnel offrant une excellente adhérence et réduisant les risques de blessures. Les vestiaires sont des installations spacieuses avec douches et casiers pour les joueurs. Les gradins ont une capacité d\'accueil pour les spectateurs, parfaite pour les matchs de ligue ou les événements spéciaux. L\'équipement inclut des panneaux d\'affichage électronique pour le score et les temps, ainsi que des paniers réglables en hauteur.'
  }
};

const About = ({ language }) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={court_img} alt="" className='court-img' />
      </div>
      <div className="about-right">
        <h3>{translations[language].title}</h3>
        <h2>{translations[language].subtitle}</h2>
        <p>{translations[language].description1}</p>
        <p>{translations[language].description2}</p>
      </div>
    </div>
  )
}

export default About

