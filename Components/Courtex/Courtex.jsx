import React from 'react'
import './Courtex.css'
import court_img from '../../assets/court_2.jpg'
const Courtex = () => {
    return (
        <div className='court'>
            <div className="court-left">
            <h3>Exterior Court</h3>
            <h2>HoopZone Park</h2>
            <p>e HoopZone Park est un terrain de basketball extérieur, idéal pour les parties de streetball et les jeux entre amis. Situé en plein air, ce terrain offre une ambiance dynamique et décontractée, parfaite pour les amateurs de basketball qui aiment jouer sous le soleil.</p>
            <p>La surface de jeu est en béton lisse, conçu pour résister aux intempéries et offrir une bonne adhérence. L'éclairage est assuré par des projecteurs puissants permettant de jouer jusqu'à tard le soir. L'environnement est situé dans un parc paisible, entouré de verdure, offrant une atmosphère agréable et relaxante. L'équipement comprend des paniers robustes avec filets résistants et des bancs pour les joueurs et spectateurs. L'accessibilité est facilitée par la proximité d'un parking, parfait pour des rassemblements et des événements communautaires.</p>
          </div>
          <div className="court-right">
            <img src={court_img} alt="" className='court-img' />
          </div>
        </div>
        
    
        
      )
    }

export default Courtex
