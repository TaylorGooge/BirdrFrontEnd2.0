import React from 'react';
import BasePage from './BasePage';
import ContactSection1 from '../Components/Contact/ContactSection1';
import ContactSection2 from '../Components/Contact/ContactSection2';


export default function Contactpage() {
  return (
    <BasePage>
      <main className='main-content' id="main-content" >
        <ContactSection1 />
        <ContactSection2 />

      </main>
    </BasePage>

  );
}