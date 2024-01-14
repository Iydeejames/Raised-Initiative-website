import React, { useState } from 'react';
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
        id: 7,
        title: 'Human Capital Development',
        image: RI27,
        link: '#',
        content: `Call for Application
        RAISED Initiative school of African leadership is an annual residency fellowship event organized by the RAISED Initiative Institute. The aim of the school of African leadership is to create a shaping hub for young and passionate Africans from diverse sectors who have keen interest in the reformation process of the African continent. We intend to equip our students with cutting edge knowledge on leadership tailored for the African continent for its advancement. 
        The goal of the school is to become a go to hub which provides an African leadership solution for the continent by equipping its young and passionate citizens, who will go on to implement this knowledge in various sectors for the development of our great continent. 
        Therefore the RAISED Initiative school of African leadership is calling for young Africans from the ages of 14-45 who are passionate about the reformation of Africa to apply to be admitted into the RAISED Initiative school of African leadership class of 2024 residency program  which will be taking place from 15th January to 8th April  2024. 
        The program will teach young African with interest in leadership from different sectors  in the African continent, the leadership model developed by Africans for Africa which when deployed will put the African development process on the right track leading it to its glory days.
        Call for Applications
        RAISED Initiative school of African leadership is an annual residency fellowship event organized by the RAISED Initiative Institute. The aim of the school of African leadership is to create a shaping hub for young and passionate Africans from diverse sectors who have keen interest in the reformation process of the African continent. We intend to equip our students with cutting edge knowledge on leadership tailored for the African continent for its advancement. 
        The goal of the school is to become a go to hub which provides an African leadership solution for the continent by equipping its young and passionate citizens, who will go on to implement this knowledge in various sectors for the development of our great continent. 
        Therefore the RAISED Initiative school of African leadership is calling for young Africans from the ages of 14-45 who are passionate about the reformation of Africa to apply to be admitted into the RAISED Initiative school of African leadership class of 2024 residency program  which will be taking place from 15th January to 8th April  2024. 
        The program will teach young African with interest in leadership from different sectors  in the African continent, the leadership model developed by Africans for Africa which when deployed will put the African development process on the right track leading it to its glory days. 
        `,
      },
      {
        id: 8,
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
    id: 5,
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
    id: 6,
    title: 'School of African Initiative Program',
    image: RI22,
    link: '#',
    content: `Call for Application
    RAISED Initiative school of African leadership is an annual residency fellowship event organized by the RAISED Initiative Institute. The aim of the school of African leadership is to create a shaping hub for young and passionate Africans from diverse sectors who have keen interest in the reformation process of the African continent. We intend to equip our students with cutting edge knowledge on leadership tailored for the African continent for its advancement. 
    The goal of the school is to become a go to hub which provides an African leadership solution for the continent by equipping its young and passionate citizens, who will go on to implement this knowledge in various sectors for the development of our great continent. 
    Therefore the RAISED Initiative school of African leadership is calling for young Africans from the ages of 14-45 who are passionate about the reformation of Africa to apply to be admitted into the RAISED Initiative school of African leadership class of 2024 residency program  which will be taking place from 15th January to 8th April  2024. 
    The program will teach young African with interest in leadership from different sectors  in the African continent, the leadership model developed by Africans for Africa which when deployed will put the African development process on the right track leading it to its glory days.
    Call for Applications
    RAISED Initiative school of African leadership is an annual residency fellowship event organized by the RAISED Initiative Institute. The aim of the school of African leadership is to create a shaping hub for young and passionate Africans from diverse sectors who have keen interest in the reformation process of the African continent. We intend to equip our students with cutting edge knowledge on leadership tailored for the African continent for its advancement. 
    The goal of the school is to become a go to hub which provides an African leadership solution for the continent by equipping its young and passionate citizens, who will go on to implement this knowledge in various sectors for the development of our great continent. 
    Therefore the RAISED Initiative school of African leadership is calling for young Africans from the ages of 14-45 who are passionate about the reformation of Africa to apply to be admitted into the RAISED Initiative school of African leadership class of 2024 residency program  which will be taking place from 15th January to 8th April  2024. 
    The program will teach young African with interest in leadership from different sectors  in the African continent, the leadership model developed by Africans for Africa which when deployed will put the African development process on the right track leading it to its glory days. 
    `,
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