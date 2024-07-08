import React from 'react'
import './Gym.css'
import court_img from '../../assets/court_3.jpg'
const Gym = () => {
    return (
        <div className='gym'>
          <div className="gym-left">
            <img src={court_img} alt="" className='court-img' />
          </div>
          <div className="gym-right">
            <h3>Interior Gym</h3>
            <h2>HoopZone Gym</h2>
            <p>Le HoopZone comprend également une salle de gym moderne et bien équipée, idéale pour les amateurs de fitness et les athlètes de haut niveau. La salle de gym dispose d'une variété d'équipements de musculation et de cardio, permettant de répondre à tous les besoins d'entraînement. Elle offre un espace spacieux avec des zones dédiées pour les exercices de poids libres, les machines, et les cours collectifs. Les vestiaires sont confortables et équipés de douches pour un maximum de commodité. La salle de gym est climatisée pour assurer un environnement agréable quelle que soit la saison, et des entraîneurs qualifiés sont disponibles pour fournir des conseils et des programmes d'entraînement personnalisés.</p>
          </div>
        </div>
        
      )
    }

export default Gym
