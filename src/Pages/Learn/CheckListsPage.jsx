import React from 'react';
import NavBar from '../../Components/NavBar/Navbar';
import Footer from '../../Components/Footer/Footer';
import CheckLists from '../../Components/Learn/CheckLists/CheckLists';

export default function CheckListsPage() {
  return (
    <div>
      <NavBar />
      <CheckLists />
      <Footer />
    </div>
  );
}