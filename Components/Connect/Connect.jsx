import React, { useRef } from 'react'
import './Connect.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_pic from '../../assets/user-pic.jpg'

const translations = {
  en: {
    julienName: 'Julien Leblanc',
    julienInfo: 'Male, 29 years',
    julienDesc: 'I am looking for a partner for a friendly 2v2 match at HoopZone Park (outdoor) on Saturday, June 29, 2024, from 3:00 PM to 5:00 PM. Intermediate level, ready to have fun and meet new players.',
    charlesName: 'Charles Hugot',
    charlesInfo: 'Male, 35 years',
    charlesDesc: 'I am looking for an opponent for a 1v1 match at HoopZone Park (outdoor) on Friday, June 28, 2024, from 6:00 PM to 7:00 PM. This will be an intermediate level match, for fun and to stay fit.',
    emmaName: 'Emma Dupuis',
    emmaInfo: 'Female, 24 years',
    emmaDesc1: 'I am looking for a partner for a friendly 2v2 match at HoopZone Park (outdoor) on Saturday, June 29, 2024, from 3:00 PM to 5:00 PM. Intermediate level, ready to have fun and meet new players.',
    emmaDesc2: 'We are two and looking for four more players for a 3v3 match at HoopZone Arena (indoor) on Sunday, June 30, 2024, from 10:00 AM to 12:00 PM. This will be a beginner to intermediate level match.'
  },
  fr: {
    julienName: 'Julien Leblanc',
    julienInfo: 'Homme, 29 ans',
    julienDesc: 'Je cherche un partenaire pour un match amical en 2v2 au HoopZone Park (extérieur) le samedi 29 juin 2024, de 15h00 à 17h00. Niveau intermédiaire, prêt à s\'amuser et à rencontrer de nouveaux joueurs.',
    charlesName: 'Charles Hugot',
    charlesInfo: 'Homme, 35 ans',
    charlesDesc: 'Je cherche un adversaire pour un match en 1v1 au HoopZone Park (extérieur) le vendredi 28 juin 2024, de 18h00 à 19h00. Ce sera un match de niveau intermédiaire, pour le plaisir et pour se maintenir en forme.',
    emmaName: 'Emma Dupuis',
    emmaInfo: 'Femme, 24 ans',
    emmaDesc1: 'Je cherche un partenaire pour un match amical en 2v2 au HoopZone Park (extérieur) le samedi 29 juin 2024, de 15h00 à 17h00. Niveau intermédiaire, prêt à s\'amuser et à rencontrer de nouveaux joueurs.',
    emmaDesc2: 'Nous sommes deux et cherchons quatre autres joueuses/joueurs pour un match en 3v3 à la HoopZone Arena (intérieur) le dimanche 30 juin 2024, de 10h00 à 12h00. Ce sera un match de niveau débutant à intermédiaire.'
  }
};

const Connect = ({ language }) => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className='connect'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_pic} alt="" />
                <div>
                  <h3>{translations[language].julienName}</h3>
                  <span>{translations[language].julienInfo}</span>
                </div>
              </div>
              <p>{translations[language].julienDesc}</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_pic} alt="" />
                <div>
                  <h3>{translations[language].charlesName}</h3>
                  <span>{translations[language].charlesInfo}</span>
                </div>
              </div>
              <p>{translations[language].charlesDesc}</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_pic} alt="" />
                <div>
                  <h3>{translations[language].emmaName}</h3>
                  <span>{translations[language].emmaInfo}</span>
                </div>
              </div>
              <p>{translations[language].emmaDesc1}</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_pic} alt="" />
                <div>
                  <h3>{translations[language].emmaName}</h3>
                  <span>{translations[language].emmaInfo}</span>
                </div>
              </div>
              <p>{translations[language].emmaDesc2}</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_pic} alt="" />
                <div>
                  <h3>{translations[language].julienName}</h3>
                  <span>{translations[language].julienInfo}</span>
                </div>
              </div>
              <p>{translations[language].julienDesc}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Connect

}

export default Connect
