import React, { useEffect, useState } from 'react';
import TabbedContent from './TabbedMap/TabbedContent';
import { toGeoJsonHelper } from './helpers/toGeoJsonHelper';

export default function TabbedMapNav() {
  let [geoJson, setGeoJson] = useState('');
  let [showLocError, setShowLocError] = useState(false);

  const noLocation = () => {
    setShowLocError(true)
  }


  const foundLocation = async (pos) => {
    setShowLocError(false)
    let params = {
      long: pos.coords.longitude,
      lat: pos.coords.latitude,
    }
    getSightings(params)
  }

  const getSightings = async (params) => {
    let response = await fetch(`https://birdrapi-83d15ff7da21.herokuapp.com/birdSighting/geodist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    });
    if (response.ok) {
      const data = await response.json();
      let results = toGeoJsonHelper(data);
      setGeoJson(results);
    }
  }


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(foundLocation, noLocation, { timeout: 30000000000, enableHighAccuracy: false, maximumAge: 75000 });

    }
  }, []);

  return (
    <main className='main-content' id="main-content" >
      <nav className="mb-4">
        <div className="nav nav-pills nav-fill rounded-2 px-2 py-1 bg-white shadow" role="tablist">
          <a className="nav-link active" data-bs-toggle="tab" href="#tab3-home" role="tab" aria-selected="true">Report</a>
          <a className="nav-link" data-bs-toggle="tab" href="#tab3-profile" role="tab" aria-selected="false">Search</a>
          <a className="nav-link" data-bs-toggle="tab" href="#tab3-contact" role="tab" aria-selected="false">Filter</a>
        </div>
      </nav>
      <TabbedContent geoJson={geoJson} locError={showLocError}/>

    </main>


  );
}