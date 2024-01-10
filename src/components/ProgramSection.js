import React from 'react';
import RI5 from "../assets/img/RI5.jpg";
import RI22 from "../assets/img/RI22.PNG";
import RI23 from "../assets/img/RI23.JPG";
import RI24 from "../assets/img/RI24.JPG";
import RI25 from "../assets/img/RI25.JPG";
import RI26 from "../assets/img/RI26.JPG";
import RI27 from "../assets/img/RI27.JPG";
import RI28 from "../assets/img/RI28.JPG";

const programsData = [
    {
        id: 4,
        title: 'Human Capital Development',
        image: RI27,
        link: '#',
      },
      {
        id: 4,
        title: 'Wish for a Better Africa',
        image: RI28,
        link: '#',
      },
  {
    id: 3,
    title: 'Membership Application',
    image: RI24,
    link: '',
  },
  {
    id: 4,
    title: 'Afrika Yetu',
    image: RI25,
    link: '#',
  },
  {
    id: 4,
    title: 'Call for Membership',
    image: RI26,
    link: '#',
  },
  {
    id: 1,
    title: 'Pan African Talk',
    image: RI5,
    link: '',
  },
  {
    id: 2,
    title: 'Pan African Talk',
    image: RI23,
    link: '',
  },
  {
    id: 4,
    title: 'School of African Initiative Program',
    image: RI22,
    link: '#',
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