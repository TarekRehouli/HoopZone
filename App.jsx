import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import About from './Components/About/About'
import Courtex from './Components/Courtex/Courtex'
import Gym from './Components/Gym/Gym'
import Connect from './Components/Connect/Connect'
import Title from './Components/Title/Title'
import FixedIcon from './Components/FixedIcon/FixedIcon'
import Contact from './Components/Contact/Contact'

const translations = {
  en: {
    subtitle1: 'Our Facilities',
    title1: 'What We Offer',
    subtitle2: 'Connect',
    title2: 'Join A Team',
    subtitle3: 'Contact us',
    title3: 'Book A Reservation'
  },
  fr: {
    subtitle1: 'Nos Installations',
    title1: 'Ce Que Nous Offrons',
    subtitle2: 'Connecter',
    title2: 'Rejoindre Une Équipe',
    subtitle3: 'Contactez nous',
    title3: 'Réserver Une Réservation'
  }
};

const App = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <div>
      <div className="language-switcher">
        <button onClick={() => handleLanguageChange('en')}>English</button>
        <button onClick={() => handleLanguageChange('fr')}>Français</button>
      </div>
      <Navbar language={language} translations={translations}/>
      <Hero language={language} translations={translations}/>
      <div className="container">
        <FixedIcon language={language} translations={translations}/>
        <Title subtitle={translations[language].subtitle1} title={translations[language].title1}/>
        <Programs language={language} translations={translations}/>
        <About language={language} translations={translations}/>
        <Courtex language={language} translations={translations}/>
        <Gym language={language} translations={translations}/>
        <Title subtitle={translations[language].subtitle2} title={translations[language].title2}/>
        <Connect language={language} translations={translations}/>
        <Title subtitle={translations[language].subtitle3} title={translations[language].title3}/>
        <Contact language={language} translations={translations}/>
      </div>
    </div>
  )
}

export default App
