import React from 'react';
import BasePage from './BasePage'
import AboutRow1 from '../Components/About/AboutRow1';
import AboutRow2 from '../Components/About/AboutRow2';

export default function Aboutpage() {
  return (
    <BasePage>
      <main className='main-content' id="main-content" >
        <AboutRow1 />
        <AboutRow2 />

      </main>

    </BasePage>

  );
}