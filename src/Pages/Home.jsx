import React from 'react';
import BasePage from './BasePage'
import Hero from '../Components/Hero/Hero';
import Feature from '../Components/Feature/Feature';
import FeatureImage from '../Components/Feature/FeatureImage';

export default function Homepage() {
  return (
    <BasePage>

      <main className='main-content' id="main-content" >
        <Hero />
        <Feature />
        <FeatureImage />
      </main>

    </BasePage>
  );
}