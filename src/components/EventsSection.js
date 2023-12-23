import React, { useEffect, useState } from "react";
import RI8 from "../assets/img/RI8.jpg";

const eventsData = [
    {
      title: "Economic Empowerment Program",
      description: "Economic Empowerment is a center piece of our drive as an organization, and the reformation of Africa is not complete until we have every African adult of the right working age being economically empowered. Thus we undertake various economic empowerment programs aimed at alleviating the financial condition of our members and the economic situation of our great continent at large.",
    },
    {
      title: "Pan African Conference",
      description: "The Pan African Conference is a RAISED Initiative's international cum residential event that brings Pan Africans under a common umbrella to discuss and proffer solutions to many of the issues in Africa. It is mainly a three - four day event that brings together speakers and young leaders from diverse African backgrounds to engage in practical and carefully designed schedules that will ignite the zeal of young people towards Africa's growth.",
    },
    {
      title: "Mentor +",
      description: "Mentor + is a RAISED Initiative's residency program that gives young and emerging leaders, tertiary students and graduates the opportunity to mentor student's in rural/ peri urban communities while they get the opportunity to strengthen their emotional intelligence, leadership skills and communication skills.",
    },
    {
      title: "Pan African Talk",
      description: "The Pan-African Talk is a RAISED Initiatives event that is dedicated to propagating the African ideas, in a wide choice of topics ranging from culture, developments, science, designs, technology, and management that is typically in the form of short and powerful talks, It is a community of African people telling their own stories that resonate in their culture, who believes in the power of ideas to change the African narratives and ultimately attitudes that are inspired by truth and great thinking.Its mainly a one day event and organized at the national level of RAISED Initiatives."
    },
    {
      title: "AU Agenda 2063 and UN SDGs Awareness Program",
      description: "As part of our commitment towards reforming the African continent, our AU Agenda 2063 and UN SDGs Awareness Program has been designed to create wanton awareness on these goals so as to promote a unison and inclusive achievement of these goals. This we believe is a very important player towards getting our goal of a reformed continent actualized.",
    },
    {
      title: "Afrika Yetu",
      description: "Afrika Yetu is a weekly online educative program of RAISED Initiatives where the host invites speakers from different fields to impact knowledge to the members of RAISED Initiatives on subject areas that are beneficial to their growth as reformers.",
    },
    {
      title: "100 Around Africa",
      description: "100 Around Africa is a yearly award and recognition program of RAISED Initiatives for Africans who are contributing their quota to the development of Africa, the awards recognizes change makers and drivers across the continent and seeks to appreciate them whilst motivating them to keep doing even more towards the reformation of Africa.",
    },
    {
      title: "International Youth Day Celebration",
      description: "Youth day celebration is so dear to our heart and as a young people's organization, the International Youth Day celebration is one of our activities we undertake to celebrate the youths, their contribution towards rebuilding a reformed Africa and their commitment towards that cause.",
    },
    {
      title: "Skill Training",
      description: "Skill training is one of the give back activities of RAISED Initiatives to the respective communities within Africa. This project has been tailored to train young Africans in various skill acquisition as part of our bigger goal of ensuring every African has what to do to earn a living, to live responsibly and to be able to contribute to their quota to the development process of our continent.",
    },
    {
      title: "Research",
      description: "To get to our destination of a reformed Africa, part of our activities include active research towards issues bothering the development of Africa. This is one of our important pillars as an organization towards the actualization and achievement of a reformed Africa.",
    },
    {
      title: "Charity Engagement",
      description: "To get to our destination of a reformed Africa, part of our activities include active research towards issues bothering the development of Africa. This is one of our important pillars as an organization towards the actualization and achievement of a reformed Africa.",
    },
  ];

  

  const EventsSection = () => {
    const [currentEventIndex, setCurrentEventIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
  
      return () => clearInterval(interval);
    }, [currentEventIndex]);
  
    const nextSlide = () => {
      setCurrentEventIndex((prevIndex) => (prevIndex + 1) % eventsData.length);
    };
  
    const prevSlide = () => {
      setCurrentEventIndex((prevIndex) => (prevIndex - 1 + eventsData.length) % eventsData.length);
    };
  
    return (
      <div className="events-section">
        <div className="events-content">
          {eventsData.map((event, index) => (
            <div key={index} className={`event-card card-${index + 1} ${index === currentEventIndex ? "active" : ""}`}>
              <div className="card-content">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>
              <div className="navigation-buttons">
                <button className="prev-button" onClick={prevSlide}>
                  &lt;
                </button>
                <button className="next-button" onClick={nextSlide}>
                  &gt;
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="image-container">
          <img src= { RI8 } alt="" />
        </div>
      </div>
    );
  };
  
  export default EventsSection;