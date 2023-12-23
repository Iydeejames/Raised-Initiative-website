import React, { useEffect } from "react";
import gsap from "gsap";
import RI1 from "../assets/img/RI1.jpg";
import RI6 from "../assets/img/RI6.JPG";
import RI3 from "../assets/img/RI3.jpg";
import RI2 from "../assets/img/RI2.jpg";

const leadersData = [
    { id: 1, name: "Leader Name 1", image: RI1 },
    { id: 2, name: "Leader Name 2", image: RI2 },
    { id: 3, name: "Leader Name 3", image: RI3 },
    { id: 4, name: "Leader Name 4", image: RI6 },
    // Add more leaders as needed
  ];
  
  const LeadersSection = () => {
    return (
      <div className="leaders-section">
        <div className="leader-frame">
          {leadersData.map((leader) => (
            <div key={leader.id} className="leader-card">
              <img src={leader.image} alt={leader.name} className="leader-image" />
              <div className="overlay">
                <p className="leader-name">{leader.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default LeadersSection;