import React from 'react'
import './Contact.css'

const translations = {
  en: {
    yourName: 'Your Name:*',
    enterYourName: 'Enter your name',
    yourEmail: 'Your Email:*',
    enterYourEmail: 'Enter your email',
    yourNumber: 'Your Number:*',
    enterYourNumber: 'Enter your number',
    request: 'Request:*',
    selectRegistration: 'Select your registration',
    professionalClub: 'Professional Club Registration',
    team5: 'Team - 5 Players',
    team4: 'Team - 4 Players',
    team3: 'Team - 3 Players',
    solo: 'Solo - 1 Player',
    schoolClub: 'School Club Registration',
    other: 'Other',
    chooseCourts: 'Choose Courts:*',
    selectFacility: 'Select a facility',
    interiorCourt: 'HoopZone Arena - Interior Court',
    exteriorCourt: 'HoopZone Park - Exterior Court',
    interiorGym: 'HoopZone Gym - Interior Gym',
    joinTeam: 'Join a team:(optional)',
    selectTeam: 'Select a team',
    julienLeblanc: 'Julien Leblanc',
    charlesHugot: 'Charles Hugot',
    emmaDupuis: 'Emma Dupuis',
    bookingDate: 'Booking Date:*',
    submit: 'Submit'
  },
  fr: {
    yourName: 'Votre Nom:*',
    enterYourName: 'Entrez votre nom',
    yourEmail: 'Votre Email:*',
    enterYourEmail: 'Entrez votre email',
    yourNumber: 'Votre Numéro:*',
    enterYourNumber: 'Entrez votre numéro',
    request: 'Demande:*',
    selectRegistration: 'Sélectionnez votre inscription',
    professionalClub: 'Inscription au Club Professionnel',
    team5: 'Équipe - 5 Joueurs',
    team4: 'Équipe - 4 Joueurs',
    team3: 'Équipe - 3 Joueurs',
    solo: 'Solo - 1 Joueur',
    schoolClub: 'Inscription au Club Scolaire',
    other: 'Autre',
    chooseCourts: 'Choisissez les Terrains:*',
    selectFacility: 'Sélectionnez une installation',
    interiorCourt: 'HoopZone Arena - Court Intérieur',
    exteriorCourt: 'HoopZone Park - Court Extérieur',
    interiorGym: 'HoopZone Gym - Gym Intérieur',
    joinTeam: 'Rejoindre une équipe:(optionnel)',
    selectTeam: 'Sélectionnez une équipe',
    julienLeblanc: 'Julien Leblanc',
    charlesHugot: 'Charles Hugot',
    emmaDupuis: 'Emma Dupuis',
    bookingDate: 'Date de Réservation:*',
    submit: 'Soumettre'
  }
};

const Contact = ({ language }) => {
  return (
    <div className="contact">
      <form>
        <span>{translations[language].yourName}</span>
        <input className='box' type="text" name="name" placeholder={translations[language].enterYourName} required/>
        <span>{translations[language].yourEmail}</span>
        <input type="email" name="email" placeholder={translations[language].enterYourEmail} className="box" required/>
        <span>{translations[language].yourNumber}</span>
        <input type="number" name="number" placeholder={translations[language].enterYourNumber} className="box" required/>
        <span>{translations[language].request}</span>
        <select name="service" className="box" required>
          <option value="" disabled selected>{translations[language].selectRegistration}</option>
          <option value="schedule-appointment">{translations[language].professionalClub}</option>
          <option value="question-services">{translations[language].team5}</option>
          <option value="question-services">{translations[language].team4}</option>
          <option value="question-services">{translations[language].team3}</option>
          <option value="question-services">{translations[language].solo}</option>
          <option value="question-services">{translations[language].schoolClub}</option>
          <option value="other">{translations[language].other}</option>
        </select>
        <span>{translations[language].chooseCourts}</span>
        <select name="service" className="box" required>
          <option value="" disabled selected>{translations[language].selectFacility}</option>
          <option value="general_dentistry">{translations[language].interiorCourt}</option>
          <option value="dental-radiography">{translations[language].exteriorCourt}</option>
          <option value="implantology">{translations[language].interiorGym}</option>
        </select>
        <span>{translations[language].joinTeam}</span>
        <select name="service" className="box" required>
          <option value="" disabled selected>{translations[language].selectTeam}</option>
          <option value="general_dentistry">{translations[language].julienLeblanc}</option>
          <option value="dental-radiography">{translations[language].charlesHugot}</option>
          <option value="implantology">{translations[language].emmaDupuis}</option>
        </select>
        <span>{translations[language].bookingDate}</span>
        <input type="datetime-local" name="date" className="box"/>
        <button type="submit" className="btn dark-btn">{translations[language].submit}</button>
      </form>
    </div>
  )
}

export default Contact

