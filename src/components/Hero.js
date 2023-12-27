import React, { useState, useEffect } from "react";
import RI10 from "../assets/img/RI10.JPG";
import RI12 from "../assets/img/RI12.JPG";
import RI13 from "../assets/img/RI13.JPG";
import RI16 from "../assets/img/RI16.JPG";
import RI18 from "../assets/img/RI18.JPG";
import RI19 from "../assets/img/RI19.JPG";
import RI20 from "../assets/img/RI20.JPG";
import RI21 from "../assets/img/RI21.JPG";

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0); 
    const images = [RI12, RI10, RI13, RI16, RI18, RI19, RI20, RI21];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change slide every 5 seconds
  
      return () => clearInterval(interval);
    }, [currentIndex, images.length]);
  
    return (
      <div className="hero-section">
        <div className="slideshow-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
            >
              <img src={image} alt={`Slide ${index + 1}`} className="hero-image" />
            </div>
          ))}
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>RAISED Initiatives</h1>
            <h5>Surpassing Mediocrity</h5>
            <p>
            <b>RAISED (Reforming Africa through Inspiration and Seminar for Empowered Development) Initiatives</b> is an African people's organization that seeks to provide the necessary platform for Africans to build a better, progressive, empowered, and peaceful Africa. We are doing this through SDG 4, SDG 6, and Capacity building.
              At <b>RAISED Initiatives</b> we are convinced Africa can be great, and Africa will be great. We are dedicated to the task of making our continent great again.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;