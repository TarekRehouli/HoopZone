import React from 'react'
import './Gym.css'
import court_img from '../../assets/court_3.jpg'

const translations = {
  en: {
    title: 'Interior Gym',
    subtitle: 'HoopZone Gym',
    description: 'HoopZone also includes a modern and well-equipped gym, ideal for fitness enthusiasts and elite athletes. The gym offers a variety of strength and cardio equipment to meet all training needs. It provides a spacious area with dedicated zones for free weight exercises, machines, and group classes. The locker rooms are comfortable and equipped with showers for maximum convenience. The gym is air-conditioned to ensure a pleasant environment regardless of the season, and qualified trainers are available to provide personalized training advice and programs.'
  },
  fr: {
    title: 'Gym Intérieur',
    subtitle: 'HoopZone Gym',
    description: 'Le HoopZone comprend également une salle de gym moderne et bien équipée, idéale pour les amateurs de fitness et les athlètes de haut niveau. La salle de gym dispose d\'une variété d\'équipements de musculation et de cardio, permettant de répondre à tous les besoins d\'entraînement. Elle offre un espace spacieux avec des zones dédiées pour les exercices de poids libres, les machines, et les cours collectifs. Les vestiaires sont confortables et équipés de douches pour un maximum de commodité. La salle de gym est climatisée pour assurer un environnement agréable quelle que soit la saison, et des entraîneurs qualifiés sont disponibles pour fournir des conseils et des programmes d\'entraînement personnalisés.'
  }
};

const Gym = ({ language }) => {
  return (
    <div className='gym'>
      <div className="gym-left">
        <img src={court_img} alt="" className='court-img' />
      </div>
      <div className="gym-right">
        <h3>{translations[language].title}</h3>
        <h2>{translations[language].subtitle}</h2>
        <p>{translations[language].description}</p>
      </div>
    </div>
  )
}

export default Gym
