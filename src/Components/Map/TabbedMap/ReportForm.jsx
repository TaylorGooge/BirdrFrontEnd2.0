import React, { useEffect, useState } from 'react';
import ReportBird from '../ReportBird';
import ImprovedMap from '../Map/ImprovedMap';
import { makeApiCall } from '../../../../api';
import { useAuth0 } from "@auth0/auth0-react";
import Select from 'react-select';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import LocationError from './LocationError'

export default function ReportForm(props) {
  let [speciesList, setSpeciesList] = useState(null);
  let [showModal, setShowModal] = useState(false);
  let [reportBird, setReportBird] = useState(null);
  let [showSuccess, setShowSuccess] = useState(false);
  let [showFailure, setShowFailure] = useState(false);
  let [showLocError, setShowLocError] = useState(false);

  const { user, isAuthenticated, isLoading } = useAuth0();

  const postBirdSighting = () => {
    if (reportBird == 0 || reportBird == null) {
      return
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(foundLocation, noLocation, { timeout: 30000000000, enableHighAccuracy: false, maximumAge: 75000 });
      }

    }

  }

  const noLocation = () => {
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
    if (response && response.status === 200) {
      setShowSuccess(true);
    } else {
      setShowFailure(true);
    }
  }

  const handleReportChange = selectedOption => {
    setReportBird(selectedOption.birdID);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const speciesResponse = await makeApiCall('/birdCodes', 'GET')
        setSpeciesList(speciesResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
          Report a Sighting
          <Tooltip title="Logging a bird adds a waypoint to the map so that birdwatchers can help each other find interesting birds." arrow>
            <Button className="text-decoration-underline text-primary">?</Button>
          </Tooltip>
        </h6>
        <div className="border-bottom flex-grow-1"></div>
      </div>
      <div className="row mt-4">
        <div className="col" data-testid="birdSelectContainer">
          <Select
            classNamePrefix='list'
            className="form-control"
            type="select"
            id="birdName"
            data-testid="birdName"
            inputId='birdName'
            autoComplete="on"
            aria-label="select"
            onChange={handleReportChange}
            getOptionLabel={option => option.englishName}
            getOptionValue={option => option.birdId}
            options={speciesList}
          >
          </Select>
          {showSuccess && <div className="alert alert-sucess" role="alert">You've successfully logged a bird.</div>}
          {showFailure && (
            <div className="alert alert-danger" role="alert" data-testid="showFailureAlert">
              Something went wrong, try again later and contact us if the error persists.
            </div>
          )}
          {showLocError || props.locError && (
            <LocationError />
          )}
        </div>
        <div className="col">
          <button id="submitBird" className="btn btn-primary" onClick={postBirdSighting} data-testid="submitBird">
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
      {showModal ? <ReportBird showModal={showModal} handleCloseModal={handleCloseModal} /> : null}
      <ImprovedMap geoJson={props.geoJson} key={1} keyVal={1} />
    </>
  );
}