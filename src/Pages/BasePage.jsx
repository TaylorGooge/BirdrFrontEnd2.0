import React from 'react';
import NavBar from '../Components/NavBar/Navbar';
import Footer from '../Components/Footer/Footer';

const BasePage = ({children}) => {

  return (
     <div>
      <NavBar />
       {children}
      <Footer />
    </div>
  );
};
export default BasePage;