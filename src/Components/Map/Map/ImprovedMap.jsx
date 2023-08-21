import React, { useEffect, useState, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
//import map_config from './map_config.js'

const ImprovedMap = (props) => {
  let [map, setMap] = useState(null);
  let [locationButton, setLocationButton] = useState(null);
  let [windowOpen, setWindowOpen] = useState(false);
  let [showCenter, setShowCenter] = useState(true);
  let [initLocationButton, setInitLocationButton] = useState(false);
  

  const initMap = () => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_googlemapsapi,
      version: 'weekly',
      channel: '2',
      libraries: ['places'],
    });
    loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary("maps");
      setMap(map = new Map(document.getElementById(`map-${props.keyVal}`), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      }));
      map.data.setStyle({ strokeColor: 'blue' });
      map.addListener('dragend', () => { setShowCenter(false) });
      setInfoWindows();
    });
    return map
  }
  const panToCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
      });
    }

  }
  const populateMap = () => {
    clearMap();
    map.data.addGeoJson(props.geoJson);
  }

  const clearMap = () => {
    if (map.data) {
      map.data.forEach(function(feature) { map.data.remove(feature) });
    }
  }
  const setPanToLocation = () => {
    const locationButton = document.createElement('button');
    locationButton.textContent = 'Pan to Current Location';
    locationButton.classList.add('custom-map-control-button');
    setLocationButton(locationButton);
    locationButton.addEventListener('click', () => {
      setShowCenter(true);
      panToCurrentLocation();
    });
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  }
  const setInfoWindows = () => {
    let infoWindow = new google.maps.InfoWindow();
    map.data.addListener('click', (e) => {
      const feature = e.feature;
      if (feature.getProperty('birdImg') !== null && feature.getProperty('birdCall') !== null) {
        let html = `<div className="card" style="width: 18rem;">
        <ul className="list-group list-group-flush">
            <li className="list-group-item"> <bold>Species: </bold>${feature.getProperty('englishName')}</li>
            <li className="list-group-item"> <bold>Photo: </bold>${feature.getProperty('birdImg')}</li>
            <li className="list-group-item"> <bold>Call: </bold>${feature.getProperty('birdCall')}</li>
            <li className="list-group-item"><bold>Date: </bold>${feature.getProperty('date').slice(0, 10)}</li>
            <li className="list-group-item"><bold>Logged By: </bold>${feature.getProperty('userName')}</li>
        </ul>
        <a href='/learn/${feature.getProperty('birdID')}'>Learn more about this bird</a>
        </div>`
        infoWindow.setContent(html);
      } else {
        let html = `<div className="card" style="width: 18rem;">
          <ul className="list-group list-group-flush">
              <li className="list-group-item"> <bold>Species: </bold>${feature.getProperty('englishName')}</li>
              <li className="list-group-item"><bold>Date: </bold>${feature.getProperty('date').slice(0, 10)}</li>
              <li className="list-group-item"><bold>Logged By: </bold>${feature.getProperty('userID')}</li>
          </ul>
          <a href='/learn/${feature.getProperty('birdID')}'>Learn more about this bird</a>
          
          </div>`
        infoWindow.setContent(html);

      }
      setWindowOpen(true)
      infoWindow.setPosition(e.latLng)
      infoWindow.setOptions({ pixelOffset: new google.maps.Size(0, -34) })
      infoWindow.open(map);
      infoWindow.addListener('closeclick', () => {
        setWindowOpen(false);
      });

    })
  }

  useEffect(() => {
    initMap()
  }, [])


  useEffect(() => {
    if (map && props.geoJson && props.geoJson.features) {
      populateMap();
    }
  }, [map, props.geoJson]);
  useEffect(() => {
    if (map && !initLocationButton) {
      panToCurrentLocation();
      setPanToLocation();
    }
  }, [map, initLocationButton]);
  return (
    <div id={`map-${props.keyVal}`} style={{ height: '500px' }} className="d-flex justify-content-center">
    </div>
  );
};
export default ImprovedMap;
