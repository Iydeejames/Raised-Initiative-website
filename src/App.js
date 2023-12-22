import React from 'react';
import'./App.css';
import { CustomNavbar } from './components/NavBar'; // Navbar is in the components folder
import HeroSection from './components/Hero';
import BannerSection from './components/Banner';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
       <HeroSection />
       <BannerSection />
      {/* Add other components/content here */}
    </div>
  );
}

export default App;