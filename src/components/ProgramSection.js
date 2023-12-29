import React from 'react';
import RI5 from "../assets/img/RI5.jpg";

const programsData = [
  {
    id: 1,
    title: 'Pan African Talk',
    image: RI5,
    link: 'https://example.com/program1',
  },
  {
    id: 2,
    title: 'Pan African Conference',
    image: RI5,
    link: 'https://example.com/program2',
  },
  {
    id: 3,
    title: 'Mentor +',
    image: RI5,
    link: 'https://example.com/program3',
  },
  {
    id: 4,
    title: 'AU Agenda 2063 and UN SDGs Awareness Program',
    image: RI5,
    link: 'https://example.com/program4',
  },
];

const ProgramSection = () => {
  return (
    <div className="program-section">
      {programsData.map((program) => (
        <div key={program.id} className="program-card">
          <img src={program.image} alt={program.title} />
          <div className="overlay">
            <a href={program.link} target="_blank" rel="noopener noreferrer">
              {program.title}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgramSection;