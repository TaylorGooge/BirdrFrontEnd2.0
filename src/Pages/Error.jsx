import React from 'react';
import NavBar from '../Components/NavBar/Navbar';
import Profile from '../Components/Profile/Profile';
import Footer from '../Components/Footer/Footer';
import Error from '../Components/Error/Error';

export default function Errorpage() {
  
  return (
    <div>
      <NavBar />
      <Error/>
      <Footer />
    </div>
  );
}