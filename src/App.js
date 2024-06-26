import React from 'react';
import'./App.css';
import  CustomNavbar  from './components/NavBar'; 
import HeroSection from './components/Hero';
import BannerSection from './components/Banner';
import LeadersSection from './components/Leaders';
import EventsSection from './components/EventsSection';
import ProgramSection from './components/ProgramSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="App">
       <CustomNavbar />
       <HeroSection />
       <BannerSection />
       <LeadersSection/>
       <EventsSection/>
       <ProgramSection/>
       <FooterSection/>
      {/* Add other components/content here */}
    </div>
 );

};


export default App;