import React from "react";

const eventsData = [
  {
    title: "Economic Empowerment Program",
    description: "Economic Empowerment is a center piece of our drive as an organization...",
  },
  {
    title: "Pan African Conference",
    description: "The Pan African Conference is a RAISED Initiative's international cum residential event...",
  },
  {
    title: "Pan African Talk",
    description: "The Pan-African Talk is a RAISED Initiatives event that is dedicated to propagating the African ideas...",
  },
  {
    title: "Mentor +",
    description: "Mentor + is a RAISED Initiative's residency program that gives young and emerging leaders...",
  },
  {
    title: "AU Agenda 2063 and UN SDGs Awareness Program",
    description: "As part of our commitment towards reforming the African continent, our AU Agenda 2063...",
  },
  {
    title: "Afrika Yetu",
    description: "Afrika Yetu is a weekly online educative program of RAISED Initiatives where the host invites speakers...",
  },
  {
    title: "100 Around Africa",
    description: "100 Around Africa is a yearly award and recognition program of RAISED Initiatives...",
  },
  {
    title: "International Youth Day Celebration",
    description: "Youth day celebration is so dear to our heart and as a young people's organization...",
  },
  {
    title: "Skill Training",
    description: "Skill training is one of the give back activities of RAISED Initiatives to the respective communities within Africa...",
  },
  {
    title: "Research",
    description: "To get to our destination of a reformed Africa, part of our activities include active research...",
  },
  {
    title: "Charity Engagement",
    description: "At RAISED Initiatives we believe that the table is long enough to accommodate everyone...",
  },
];

const EventsSection = () => {
  return (
    <div className="events-section">
      {eventsData.map((event, index) => (
        <div key={index} className={`event-card card-${index + 1}`}>
          <div className="card-content">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsSection;