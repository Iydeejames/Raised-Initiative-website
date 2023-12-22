import React, { useEffect } from "react";
import gsap from "gsap";
import RI1 from "../assets/img/RI1.jpg";
import RI6 from "../assets/img/RI6.jpg";
import RI3 from "../assets/img/RI3.jpg";
import RI2 from "../assets/img/RI2.jpg";

const LeadersSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    tl.from(".leader", { opacity: 0, y: 100, stagger: 0.2 });

    // Trigger animations when the component mounts
    tl.play();
  }, []);

  return (
    <div className="leaders-section">
      <div className="leader-frame">
        <div className="leader">
          <img src="RI1.jpg" alt="Leader 1" />
          <p>Leader Name 1</p>
        </div>
        <div className="leader">
          <img src="RI2.jpg" alt="Leader 2" />
          <p>Leader Name 2</p>
        </div>
        <div className="leader">
          <img src="RI3.jpg" alt="Leader 3" />
          <p>Leader Name 3</p>
        </div>
        <div className="leader">
          <img src="RI6.jpg" alt="Leader 4" />
          <p>Leader Name 4</p>
        </div>
        <div className="leader">
          <img src="leader5.jpg" alt="Leader 5" />
          <p>Leader Name 5</p>
        </div>
      </div>
    </div>
  );
};

export default LeadersSection;