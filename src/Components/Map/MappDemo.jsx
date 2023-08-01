import React, { useEffect, useState } from 'react';
import ReportBird from './ReportBird';
import { useAuth0 } from "@auth0/auth0-react";
import { makeApiCall } from '../../../api.js';
import { fetchDataHelper } from './helpers/fetchDataHelper';
import { fetchGeoHelper } from './helpers/fetchGeoHelper';
import { toGeoJsonHelper } from './helpers/toGeoJsonHelper';
import { getDatesHelper } from './helpers/getDatesHelper';
import { filterHelper } from './helpers/filterHelper';
import { getSeasonMonthsHelper } from './helpers/getSeasonMonthsHelper';
import { getSeasonDateRangeHelper } from './helpers/getSeasonDateRangeHelper';
import MapWrapper from './MapWrapper';

export default function MappDemo() {
  let [groupList, setGroupList] = useState(null);
  let [speciesList, setSpeciesList] = useState(null);
  let [geoJson, setGeoJson] = useState('');
  let [rawData, setrawData] = useState(null);
  let [showModal, setShowModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  let [reportBird, setReportBird] = useState(null);
  let [searchSpecies, setSearchSpecies] = useState(null);
  let [searchGroup, setSearchGroup] = useState(null);
  let [showSuccess, setShowSuccess] = useState(null);
  let [showFailure, setShowFailure] = useState(null);
  let [showLocError, setShowLocError] = useState(null)
  let [showSearchFailure, setShowSearchFailure] = useState(null)
  let [showSearchError, setShowSearchError] = useState(null)
  let [showAllGeo, setShowAllGeo] = useState(null)

  useEffect(() => {
    fetchDataHelper()
      .then((data) => {
        setSpeciesList(data[0]);
        setGroupList(data[1]);
      })
      .catch((error) => {
        console.log(error);
      });
    fetchGeoHelper()
      .then((data) => {
        setrawData(data)
        let setGeo = toGeoJsonHelper(data)
        setGeoJson(setGeo);
        setShowAllGeo(setGeo)
      })
  }, []);
  const clearResults = () => {
    setGeoJson(showAllGeo)
  }
  const handleCheckboxChange = (event) => {
    setSelectedValue(event.target.value);
    showVal(event.target.value)
  };
  const showVal = (val) => {
    if (val == 1) {
      return getDates(val);
    }
    else if (val == 2) {
      return getDates(val);
    }
    else if (val == 3) {
      return getSeason(val);
    }
    else if (val == 4) {
      return getDates(val);
    }
    else if (val == 5) {
      return clearResults();
    }
  };
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
    try {
      setShowLocError(false)
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
      if (response.status == 200) {
        setShowSuccess(true);
        setShowFailure(false)

      }
      else {
        setShowFailure(true)
        setShowSuccess(false)
      }

    } catch (error) {
      console.log(error);
    }

  }
  const postBirdSighting = () => {
    if (reportBird == 0 || reportBird == null) {
      return
    }
    getLocation();
  }
  const getDates = (int) => {
    let result = getDatesHelper(int)
    filter(result[0], result[1]);
  }
  const winterSeasonHelper = (date, obj) => {
    return winterSeasonHelper(date, obj);
  }
  const getSeason = () => {
    const currDate = new Date();
    const seasonsMonths = getSeasonMonthsHelper(currDate);
    let seasonDateRange = getSeasonDateRangeHelper(currDate, seasonsMonths);
    if (seasonsMonths == 3) {
      seasonDateRange = winterSeasonHelper(currDate, seasonDateRange);
    }
    let res= filterHelper(rawData,seasonDateRange['start'].toISOString(), seasonDateRange['end'].toISOString());
    res = toGeoJsonHelper(res);
    setGeoJson(res);
  }
  const postSearchByBird = async () => {
    if (searchSpecies === 0 || searchSpecies === null) {
      return;
    }
    try {
      setShowSearchFailure(false);
      setShowSearchError(false);
      const response = await makeApiCall(`/birdSighting/id/${searchSpecies}`, 'GET');
      if (response.status == 200) {
        if (response.data.length > 0) {
          setrawData(response.data);
          setGeoJson(toGeoJsonHelper(response.data));
        } else {
          setShowSearchFailure(true);
        }
      } else {
        setShowSearchError(true);
      }
    } catch (error) {
      setShowSearchError(true);
    }
  };
  const postSearchByGroup = async () => {
    if (searchGroup == 0 || searchGroup == null) {
      return;
    }
    setShowSearchFailure(false);
    setShowSearchError(false);
    try {
      const response = await makeApiCall(`/birdSighting/group/${searchGroup}`, 'GET');
      if (response.status == 200) {
        if (response.data.length > 0) {
          setrawData(response.data);
          setGeoJson(toGeoJson(response.data));
        } else {
          setShowSearchFailure(true);
        }
      } else {
        setShowSearchError(true);
      }
    } catch (error) {
      setShowSearchError(true);
    }
  };
  const handleReportChange = (event) => {
    setReportBird(event.target.value);
  }
  const handleSpeciesSearchChange = (event) => {
    setSearchSpecies(event.target.value);
  }
  const handleGroupSearchChange = (event) => {
    setSearchGroup(event.target.value);
  }
  const filter = (start, end) => {
    const features = rawData;
    let res = filterHelper(features, start, end)
    toGeoJsonHelper(res);
    setGeoJson(res)
  }
  const handleTooltip = () => {
    // handle tooltip logic
  };
  const handleButtonClick = () => {
    setShowModal(!showModal);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <main className='main-content' id="main-content">
      <nav className="mb-4">
        <div className="nav nav-pills nav-fill rounded-2 px-2 py-1 bg-white shadow" role="tablist">
          <a className="nav-link active" data-bs-toggle="tab" href="#tab3-home" role="tab" aria-selected="true">Report</a>
          <a className="nav-link" data-bs-toggle="tab" href="#tab3-profile" role="tab" aria-selected="false">Search</a>
          <a className="nav-link" data-bs-toggle="tab" href="#tab3-contact" role="tab" aria-selected="false">Filter</a>
        </div>
      </nav>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="tab3-home" role="tabpanel">
          {/* <ReportForm /> */}
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
              <div>{showSuccess && <div className="alert alert-sucess" role="alert">You've successfully logged a bird.</div>}{showFailure && <div className="alert alert-danger" role="alert">Something went wrong, try again later and contact us if the error persits.</div>}</div>
            </div>
            <div className="col">
              <button id="submitBird" onClick={postBirdSighting} className="btn btn-primary">
                Submit
              </button>
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
          </div>
        </div>
        <div className="tab-pane fade" id="tab3-profile" role="tabpanel">
          <div>
            <div className="d-flex align-items-center mb-4">
              <h6 className="mb-0 me-3 me-md-4">Species</h6>
              <div className="border-bottom flex-grow-1"></div>
            </div>
            <div className="row">
              <div className="col">
                <select
                  className="form-control dropdown-basic-single"
                  type="select"
                  id="speciesSearch"
                  autoComplete="on"
                  onChange={handleSpeciesSearchChange}
                >
                  <option value="0"> Select</option>
                  {speciesList && speciesList.map((data) => (
                    <option key={data.birdID} value={data.birdID} >
                      {data.englishName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col">
                <button type="submit" id="search-submitBird" className="btn btn-primary" onClick={postSearchByBird}> Submit</button>
              </div>
            </div>
            <hr className="my-7" />
            <div className="d-flex align-items-center mb-4">
              <h6 className="mb-0 me-3 me-md-4">Search By Group</h6>
              <div className="border-bottom flex-grow-1"></div>
            </div>
            <div className="row">
              <div className="col">
                <select className="form-control search-select-basic-single" type="select" id="functionalGroup" onChange={handleGroupSearchChange} >
                  <option value="0"> Select</option>
                  {groupList && groupList.map((data) => (
                    <option key={data.id} value={data.id}>
                      {data.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col">
                <button type="submit" id="search-submitBird-1" className="btn btn-primary" onClick={postSearchByGroup}> Submit</button>
              </div>
              {showSearchError && <div className="alert alert-danger" role="alert">
                There was a problem completing your search. Try again later and contact us if the error persists.
              </div>}
              {showSearchFailure &&
                <div className="alert alert-warning" role="alert">
                  Your search did not return any results.
                </div>}
            </div>
            <hr className="my-7" />
            <a onClick={clearResults}>clear results</a>
          </div>
        </div>
        <div className="tab-pane fade container-fluid" id="tab3-contact" role="tabpanel">
          {/* <MapFilter /> */}
          <div className='row' id='slidecontainer'>
            <div className='justify-content-center align-items-center' id='radiocontainer'>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input sev_check'
                  type='radio'
                  name='radioGroup'
                  id='inlineCheckbox1'
                  value='1'
                  checked={selectedValue === '1'}
                  onChange={handleCheckboxChange}
                />
                <label className='form-check-label sev_check' htmlFor='inlineCheckbox1'>
                  Week
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input sev_check'
                  type='radio'
                  name='radioGroup'
                  id='inlineCheckbox2'
                  value='2'
                  checked={selectedValue === '2'}
                  onChange={handleCheckboxChange}
                />
                <label className='form-check-label' htmlFor='inlineCheckbox2'>
                  Month
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input sev_check'
                  type='radio'
                  name='radioGroup'
                  id='inlineCheckbox3'
                  value='3'
                  checked={selectedValue === '3'}
                  onChange={handleCheckboxChange}
                />
                <label className='form-check-label' htmlFor='inlineCheckbox3'>
                  Season
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input sev_check'
                  type='radio'
                  name='radioGroup'
                  id='inlineCheckbox4'
                  value='4'
                  checked={selectedValue === '4'}
                  onChange={handleCheckboxChange}
                />
                <label className='form-check-label' htmlFor='inlineCheckbox4'>
                  Year
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input sev_check'
                  type='radio'
                  name='radioGroup'
                  id='inlineCheckbox5'
                  value='5'
                  checked={selectedValue === '5'}
                  onChange={handleCheckboxChange}
                />
                <label className='form-check-label' htmlFor='inlineCheckbox5'>
                  All Time
                </label>
              </div>
            </div>
            <a onClick={clearResults}>clear results</a>
          </div>
        </div>
      </div>
      {showLocError && <div className="alert alert-danger" role="alert">
        Unable to locate your location. Please allow location access and try again.
      </div>}
      <MapWrapper 
        geoJson = {geoJson} 
      />
    </main>
  )
}