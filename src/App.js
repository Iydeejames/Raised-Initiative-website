import React from 'react';
import'./App.css';
import { CustomNavbar } from './components/NavBar'; // Navbar is in the components folder
import HeroSection from './components/Hero';
import BannerSection from './components/Banner';
import LeadersSection from './components/Leaders';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
       <HeroSection />
       <BannerSection />
       <LeadersSection/>
      {/* Add other components/content here */}
    </div>
  );
}

export default App;