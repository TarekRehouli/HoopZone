import React from 'react';
import './Programs.css';
import court_1 from '../../assets/court_1.jpg';
import court_2 from '../../assets/court_2.jpg';
import court_3 from '../../assets/court_3.jpg';
import court_icon from '../../assets/court_icon.png';

const translations = {
  en: {
    programs: [
      { id: 1, title: 'Interior Court', image: court_1 },
      { id: 2, title: 'Exterior Court', image: court_2 },
      { id: 3, title: 'Other', image: court_3 },
    ],
  },
  fr: {
    programs: [
      { id: 1, title: 'Court Intérieur', image: court_1 },
      { id: 2, title: 'Court Extérieur', image: court_2 },
      { id: 3, title: 'Autre', image: court_3 },
    ],
  }
};

const Programs = ({ language, searchQuery }) => {
  const programs = translations[language].programs;

  const filteredPrograms = programs.filter(program =>
    program.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="programs">
      {filteredPrograms.map(program => (
        <div key={program.id} className="program">
          <img src={program.image} alt={program.title} />
          <div className="caption">
            <img src={court_icon} alt="court icon" />
            <p>{program.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Programs;
