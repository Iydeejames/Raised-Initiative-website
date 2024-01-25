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
        content: `...Coming Soon`, 
      },
      {
        id: 8,
        title: 'Wish for a Better Africa',
        image: RI28,
        link: '#',
        content: `...Coming Soon`,
      },
  {
    id: 3,
    title: 'Membership Application',
    image: RI24,
    link: '#',
    content: `...Coming Soon`,
  },
  {
    id: 4,
    title: 'Afrika Yetu',
    image: RI25,
    link: '#',
    content: ` <br> Afrika Yetu is a weekly online educative program of RAISED Initiatives where the host invites speakers from different fields to impact knowledge to the members of RAISED Initiatives on  <br> <br> subject areas that are beneficial to their growth as reformers.`,
  },
  {
    id: 5,
    title: 'Call for Membership',
    image: RI26,
    link: '#',
    content: `...Coming Soon`,
  },
  {
    id: 1,
    title: 'Pan African Talk',
    image: RI5,
    link: '#',
    content: `  <br> The Pan-African Talk is a RAISED Initiatives event that is dedicated to propagating the African ideas, in a wide choice of topics ranging from culture, developments, science, designs, technology, and management that is typically in the form of short and powerful talks,  <br>  <br> It is a community of African people telling their own stories that resonate in their culture, who believes in the power of ideas to change the African narratives and ultimately attitudes that are inspired by truth and great thinking.Its mainly a one day event and organized at the national level of RAISED Initiatives.`,
  },
  {
    id: 2,
    title: 'Pan African Talk',
    image: RI23,
    link: '#',
    content: `  <br> The Pan-African Talk is a RAISED Initiatives event that is dedicated to propagating the African ideas, in a wide choice of topics ranging from culture, developments, science, designs, technology, and management that is typically in the form of short and powerful talks,  <br> <br> It is a community of African people telling their own stories that resonate in their culture, who believes in the power of ideas to change the African narratives and ultimately attitudes that are inspired by truth and great thinking.Its mainly a one day event and organized at the national level of RAISED Initiatives.`,
  },
  {
    id: 6,
    title: 'School of African Initiative Program',
    image: RI22,
    link: '#',
    content: `<b>CALL FOR APPLICATION</b>
    <br>
    <br>
    <b>RAISED Initiative</b> school of African leadership is an annual residency fellowship event organized by the RAISED Initiative Institute. The aim of the school of African leadership is to create a shaping hub for young and passionate Africans from diverse sectors who have keen interest in the reformation process of the African continent. We intend to equip our students with cutting edge knowledge on leadership tailored for the African continent for its advancement. 
    <br>
    The goal of the school is to become a go to hub which provides an African leadership solution for the continent by equipping its young and passionate citizens, who will go on to implement this knowledge in various sectors for the development of our great continent. 
     <br>
     <br>
    Therefore the RAISED Initiative school of African leadership is calling for young Africans from the ages of 14-45 who are passionate about the reformation of Africa to apply to be admitted into the RAISED Initiative school of African leadership class of 2024 residency program  which will be taking place from 15th January to 8th April  2024.  <br>
    The program will teach young African with interest in leadership from different sectors  in the African continent, the leadership model developed by Africans for Africa which when deployed will put the African development process on the right track leading it to its glory days.
    <br>
    <br>
    <b>Aim</b> 
<li>To be able to shape the minds of young Africans  towards being pro-Africa.</li>  
<li>To equip every fellow with the right knowledge and leadership skills to participate in the reformation process of Africa. </li> 
<li>Provide networking opportunities for young people to build and capitalize on, during their contribution to the reformation process of the African continent.</li>   
<li>Educate young and passionate Africans on the reformation process of Africa.</li>  
<br>
<br>
<b>Methodology</b>
<li>The residency program will take place for a period of 12 weeks and will adopt the digital approach.  </li> 
<li>Accepted students will undertake classes from 15th January 2024 to 8th April 2024. </li> 
<li>The training will be a mix of in class lectures, individual and group research sessions by the students, and seminars from experts in leadership  topics.</li>  
<li>The training will be conducted  in English.  </li> 
<br>
<br>
<b>Gains</b>
<li>Students will be equiped with cutting edge knowledge that works on leadership tailored for the African continent. </li> 
<li>Upon completion of the residency program members of the class of 2024 will be awarded certificates and transcripts for the program.</li>   
<li>Members of the  class of 2024 will become fellows of the RAISED Initiative school of African leadership.</li>   
<li>Opportunity to connect with reformers across the continent. </li> 
<li>And many more.  </li> 
<br>
<br>
<b>Dates to Note</b>
<li>Call for application opens — January 24th 2024. </li> 
<li> Call for application closes — February 3rd 2024. </li> 
<li> Notifications of accepted applications — February 28th 2024.</li> 
<br>
<br>
<b>Note:</b> Late submission will not be accepted   
<br>
<br>
Link for Registration : www..... 
    `,
  }
]
  

const ProgramSection = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState({});

  const openModal = (program) => {
    setSelectedProgram(program);
    setModalVisible(true);
  };

  return (
    <div className="program-section">
      {programsData.map((program) => (
        <div key={program.id} className="program-card">
          <img src={program.image} alt={program.title} />
          <div className="overlay">
            <button onClick={() => openModal(program)}>{program.title}</button>
          </div>
        </div>
      ))}

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalVisible(false)}>
              &times;
            </span>
            <div>
              <h2>{selectedProgram.title}</h2>
              {Array.isArray(selectedProgram.content) ? (
                selectedProgram.content.map((element, index) => (
                  <div
                    key={index}
                    dangerouslySetInnerHTML={{ __html: element }}
                  ></div>
                ))
              ) : (
                <p dangerouslySetInnerHTML={{ __html: selectedProgram.content }}></p>
              )}
              <p></p>
              <div className="arrow" onClick={() => setModalVisible(false)}>
                &larr;
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgramSection;