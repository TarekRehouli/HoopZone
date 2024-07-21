import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import About from './Components/About/About';
import Courtex from './Components/Courtex/Courtex';
import Gym from './Components/Gym/Gym';
import Connect from './Components/Connect/Connect';
import Title from './Components/Title/Title';
import FixedIcon from './Components/FixedIcon/FixedIcon';
import Contact from './Components/Contact/Contact';

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
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: '1000', display: 'flex', gap: '5px' }}>
        <button style={{ padding: '2px 5px', cursor: 'pointer', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '3px', fontSize: '10px' }} onClick={() => handleLanguageChange('en')}>EN</button>
        <button style={{ padding: '2px 5px', cursor: 'pointer', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '3px', fontSize: '10px' }} onClick={() => handleLanguageChange('fr')}>FR</button>
      </div>
      <Navbar language={language} />
      <div id="home">
          <Hero language={language} />
        </div>
      <div className="container">
        <FixedIcon language={language} />
        <Title subtitle={translations[language].subtitle1} title={translations[language].title1} />
        <div id="courts">
          <Programs language={language} />
        </div>
        <div>
          <About language={language} />
        </div>
        <div>
          <Courtex language={language} />
        </div>
        <div id="gym">
          <Gym language={language} />
        </div>
        <Title subtitle={translations[language].subtitle2} title={translations[language].title2} />
        <div id="connect">
          <Connect language={language} />
        </div>
        <Title subtitle={translations[language].subtitle3} title={translations[language].title3} />
        <div id="contact">
          <Contact language={language} />
        </div>
      </div>
      </div>
  );
};
      

export default App;

