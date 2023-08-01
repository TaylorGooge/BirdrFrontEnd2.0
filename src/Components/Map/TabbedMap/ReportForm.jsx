import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReportBird from '../ReportBird';
import ImprovedMap from '../Map/ImprovedMap';
import { makeApiCall } from '../../../../api';
import { useAuth0 } from "@auth0/auth0-react";

export default function ReportForm(props) {
   let [speciesList, setSpeciesList] = useState(null);
  let [showModal, setShowModal] = useState(false);
  let [reportBird, setReportBird] = useState(null);
  let [showSuccess, setShowSuccess] = useState(null);
  let [showFailure, setShowFailure] = useState(null);
  let [showLocError, setShowLocError] = useState(null);

  const { user, isAuthenticated, isLoading } = useAuth0();
  
   const postBirdSighting = () => {
     console.log('called')
    if (reportBird == 0 || reportBird == null) {
      return
    }
    getLocation();
  }
 const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(foundLocation, noLocation, { timeout: 30000000000, enableHighAccuracy: false, maximumAge: 75000 });
    } else {
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }
  const noLocation = (error) => {
    setShowLocError(true)
  }
  const foundLocation = async (pos) => {
    setShowLocError(false)
    setShowFailure(false)
    setShowSuccess(false)
   let params = {
    userID: user.sub,
    birdID: reportBird,
    coordA: pos.coords.longitude,
    coordB: pos.coords.latitude,
    date: new Date(),
    locality: null,
    country: null,
    state: null
    }
   let response = await makeApiCall('/birdSighting', 'POST', params);
    if(response && response.status === 200 ){
      setShowSuccess(true);
    } else{
      setShowFailure(true);
    }
  }
  
  const handleReportChange = (event) => {
    setReportBird(event.target.value);
  }
  
  useEffect(() => {
      const fetchData = async () => {
        try {
          const speciesResponse = await axios.get('https://birdr.taylorgooge.repl.co/birdCodes');
          setSpeciesList(speciesResponse.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
  }, []);
  const handleTooltip = () => {
    // handle tooltip logic
  };
 const handleButtonClick = () => {
    setShowModal(!showModal);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="d-flex align-items-center mb-4">
        <h6 className="mb-0 me-3 me-md-4">
          Report a Sighting{' '}
          <strong
            className="text-decoration-underline text-primary"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Logging a bird adds a waypoint to the map so that birdwatchers can help each other find interesting birds."
            onMouseOver={handleTooltip}
            onMouseOut={handleTooltip}
          >
            ?
          </strong>
        </h6>
        <div className="border-bottom flex-grow-1"></div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <select
            className="form-control bird-select-basic-single"
            type="select"
            id="birdName"
            autoComplete="on"
            aria-label="select"
            onChange={handleReportChange}
          >
            <option value="0">Select</option>
             {speciesList && speciesList.map((data) => (
              <option key={data.birdID} value={data.birdID}>
                {data.englishName}
              </option>
            ))}
          </select>
          {showSuccess && <div className="alert alert-sucess" role="alert">You've successfully logged a bird.</div>}{showFailure && <div className="alert alert-danger" role="alert">Something went wrong, try again later and contact us if the error persits.</div>}{showFailure && <div className="alert alert-danger" role="alert">Unable to log sighting because we couldn't locate you. Make sure you give Birdr permission to access your location.</div>}
        </div>
        <div className="col">
          <button id="submitBird" className="btn btn-primary" onClick={postBirdSighting} >
            Submit
          </button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
           <button type="button" className="btn btn-primary" onClick={handleButtonClick}>
            Is the bird you saw not listed?
          </button>
        </div>
        <div className="col"></div>
      </div>
      <hr className="my-7" />
      {showModal ? <ReportBird showModal={showModal} handleCloseModal={handleCloseModal}  /> : null}
      <ImprovedMap geoJson={props.geoJson} key={1} keyVal={1} />
    </>
  );
}