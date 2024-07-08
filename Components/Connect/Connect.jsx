import React, { useRef } from 'react'
import './Connect.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_pic from '../../assets/user-pic.jpg'
const Connect = () => {
    const slider = useRef();
    let tx = 0; 
const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = 'translateX(${tx}%)';
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = 'translateX(${tx}%)';
}
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
                            <h3>Julien Leblanc</h3>
                            <span>Homme, 29ans</span>
                        </div>
                    </div>
                    <p>Je cherche un partenaire pour un match amical en 2v2 au HoopZone Park (extérieur) le samedi 29 juin 2024, de 15h00 à 17h00. Niveau intermédiaire, prêt à s'amuser et à rencontrer de nouveaux joueurs.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_pic} alt="" />
                        <div>
                            <h3>Charles Hugot</h3>
                            <span>Homme, 35ans</span>
                        </div>
                    </div>
                    <p>
                    Je cherche un adversaire pour un match en 1v1 au HoopZone Park (Extérieur) le vendredi 28 juin 2024, de 18h00 à 19h00. Ce sera un match de niveau intermédiaire, pour le plaisir et pour se maintenir en forme.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_pic} alt="" />
                        <div>
                            <h3>Emma Dupuis</h3>
                            <span>Femme, 24ans</span>
                        </div>
                    </div>
                    <p>Je cherche un partenaire pour un match amical en 2v2 au HoopZone Park (extérieur) le samedi 29 juin 2024, de 15h00 à 17h00. Niveau intermédiaire, prêt à s'amuser et à rencontrer de nouveaux joueurs.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_pic} alt="" />
                        <div>
                            <h3>Emma Dupuis</h3>
                            <span>Femme, 24ans</span>
                        </div>
                    </div>
                    <p>Nous sommes deux et cherchons quatre autres joueuses/joueurs pour un match en 3v3 à la HoopZone Arena (Intérieur) le dimanche 30 juin 2024, de 10h00 à 12h00. Ce sera un match de niveau débutant à intermédiaire.
</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_pic} alt="" />
                        <div>
                            <h3>Julien Leblanc</h3>
                            <span>Homme, 29ans</span>
                        </div>
                    </div>
                    <p>Je cherche un partenaire pour un match amical en 2v2 au HoopZone Park (extérieur) le samedi 29 juin 2024, de 15h00 à 17h00. Niveau intermédiaire, prêt à s'amuser et à rencontrer de nouveaux joueurs.</p>
                </div>
            </li>
            
        </ul>
    </div>
    </div>
  )
}

export default Connect
