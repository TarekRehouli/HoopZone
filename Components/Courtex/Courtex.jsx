import React from 'react'
import './Courtex.css'
import court_img from '../../assets/court_2.jpg'

const translations = {
  en: {
    title: 'Exterior Court',
    subtitle: 'HoopZone Park',
    description1: 'HoopZone Park is an outdoor basketball court, perfect for streetball games and casual play with friends. Located outdoors, this court offers a dynamic and relaxed atmosphere, ideal for basketball enthusiasts who enjoy playing under the sun.',
    description2: 'The playing surface is smooth concrete, designed to withstand the elements and provide good traction. Lighting is provided by powerful floodlights, allowing play late into the evening. The court is situated in a peaceful park, surrounded by greenery, offering a pleasant and relaxing environment. The equipment includes sturdy baskets with durable nets and benches for players and spectators. Accessibility is facilitated by the nearby parking lot, making it perfect for gatherings and community events.'
  },
  fr: {
    title: 'Court Extérieur',
    subtitle: 'HoopZone Park',
    description1: 'Le HoopZone Park est un terrain de basketball extérieur, idéal pour les parties de streetball et les jeux entre amis. Situé en plein air, ce terrain offre une ambiance dynamique et décontractée, parfaite pour les amateurs de basketball qui aiment jouer sous le soleil.',
    description2: 'La surface de jeu est en béton lisse, conçu pour résister aux intempéries et offrir une bonne adhérence. L\'éclairage est assuré par des projecteurs puissants permettant de jouer jusqu\'à tard le soir. L\'environnement est situé dans un parc paisible, entouré de verdure, offrant une atmosphère agréable et relaxante. L\'équipement comprend des paniers robustes avec filets résistants et des bancs pour les joueurs et spectateurs. L\'accessibilité est facilitée par la proximité d\'un parking, parfait pour des rassemblements et des événements communautaires.'
  }
};

const Courtex = ({ language }) => {
  return (
    <div className='court'>
      <div className="court-left">
        <h3>{translations[language].title}</h3>
        <h2>{translations[language].subtitle}</h2>
        <p>{translations[language].description1}</p>
        <p>{translations[language].description2}</p>
      </div>
      <div className="court-right">
        <img src={court_img} alt="" className='court-img' />
      </div>
    </div>
  )
}

export default Courtex
