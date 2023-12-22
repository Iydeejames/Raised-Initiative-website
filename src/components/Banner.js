import React from "react";

const BannerSection = () => {
  return (
    <div className="banner-section">
      <div className="left-content">
        <h2>Our Mission:</h2>
        <p>
          The mission of this organization is to be independent of any political ideology, religious doctrine, and economic interest but rather a value-adding organization driving the African development process through every positive means.
        </p>
        </div>
        <div className="Middle-content">
        <h3>Our Aims and Objectives:</h3>
        <ul>
          <li>To ensure the active participation of youths in the development of Africa.</li>
          <li>To develop a dynamic and disciplined African youth imbued with the spirit of nationalism, patriotism, and a sense of propriety and civic responsibility.</li>
          <li>To nourish, shape, and develop the innate potentials of the African youth.</li>
          <li>To raise conscious leaders to build a better Africa.</li>
          <li>To promulgate the concept of the sustainable development goals for an empowered Africa.</li>
        </ul>
      </div>
      <div className="right-content">
        <h3>Our Values:</h3>
        <ul>
          <li>Think Africa above all.</li>
          <li>Respect for humanity, diversity, and teamwork.</li>
          <li>Show total solidarity to all members, impartiality, and independence.</li>
        </ul>
      </div>
    </div>
  );
};

export default BannerSection;