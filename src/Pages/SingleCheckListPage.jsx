import React from 'react';
import NavBar from '../Components/NavBar/Navbar';
import Footer from '../Components/Footer/Footer';

import SingleCheckList from '../Components/Learn/SingleCheckList'

export default function SingleCheckListPage() {
  return (
    <div>
      <NavBar />


        <SingleCheckList />
   
      <Footer />
    </div>
  );
}