import React from 'react';
import NavBar from '../Components/NavBar/Navbar';
import TabbedMapNav from '../Components/Map/TabbedMapNav';
import Footer from '../Components/Footer/Footer';

export default function Mappage() {
  return (
    <div>
      <NavBar />
      <TabbedMapNav />
      <Footer />
    </div>
  );
}