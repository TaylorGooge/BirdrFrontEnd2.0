import React from 'react';
import NavBar from '../Components/NavBar/Navbar';
import Footer from '../Components/Footer/Footer';
import TrackingHistory from '../Components/Profile/TrackingHistory/TrackingHistory';

export default function TrackingHistoryPage() {
  return (
    <div>
      <NavBar />
      <TrackingHistory />
      <Footer />
    </div>
  );
}