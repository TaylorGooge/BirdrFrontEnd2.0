import React from "react";


const MapWrapper = (props) => {
  const initMap = () =>{
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
    loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary("maps");
      setMap(map = new Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    }));
  }
  return (
    <div id="map"></div>
  
);
}

export default MapWrapper;