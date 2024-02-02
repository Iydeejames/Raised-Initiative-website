import React from "react";
import RI17 from "../assets/img/RI17.JPG";
import RI1 from "../assets/img/RI1.jpg";
import RI6 from "../assets/img/RI6.JPG";
import RI3 from "../assets/img/RI3.jpg";
import RI2 from "../assets/img/RI2.jpg";

  const leadersData = [
    { id: 1, name: "AFENA-ATTA RUDOLF - President", image: RI17 },
    { id: 1, name: "MAHAMADOU DIAWARA - National Director Mali", image: RI1 },
    { id: 2, name: "UKEMEOBONG JAMES - National Director Nigeria", image: RI6 },
    { id: 3, name: "JEFF OTIS KUMUTEH - National Director Liberia", image: RI3 },
    { id: 4, name: "AFENA ATTA RAYMOND - National Director Ghana", image: RI2 },
  ];
  
  const LeadersSection = () => {
    return (
      <div id="leaders">
      <div className="leaders-section">
              <div class="floating-bg"></div>
        <div className="leader-frame">
          {leadersData.map((leader) => (
            <div key={leader.id} className="leader-card">
              <img src={leader.image} alt={leader.name} className="leader-image" />
              <p className="leader-name">{leader.name}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  };
  
  export default LeadersSection;