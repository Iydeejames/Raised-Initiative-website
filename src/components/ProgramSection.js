import React from 'react';

const programsData = [
  {
    id: 1,
    title: 'Economic Empowerment Program',
    image: 'path-to-image-1.jpg',
    link: 'https://example.com/program1',
  },
  {
    id: 2,
    title: 'Pan African Conference',
    image: 'path-to-image-2.jpg',
    link: 'https://example.com/program2',
  },
  {
    id: 3,
    title: 'Mentor +',
    image: 'path-to-image-3.jpg',
    link: 'https://example.com/program3',
  },
  {
    id: 4,
    title: 'AU Agenda 2063 and UN SDGs Awareness Program',
    image: 'path-to-image-4.jpg',
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