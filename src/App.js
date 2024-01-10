import React from 'react';
import'./App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CustomNavbar } from './components/NavBar'; 
import HeroSection from './components/Hero';
import BannerSection from './components/Banner';
import LeadersSection from './components/Leaders';
import EventsSection from './components/EventsSection';
import ProgramSection from './components/ProgramSection';

function App() {
  return (
    <div className="App">
       <CustomNavbar />
       <HeroSection />
       <BannerSection />
       <LeadersSection/>
       <EventsSection/>
       <ProgramSection/>
      {/* Add other components/content here */}
    </div>
 );

};


export default App;
