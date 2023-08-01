import React, { useEffect, useState } from 'react';
import { fetchDataHelper } from '../helpers/fetchDataHelper';
import ImprovedMap from '../Map/ImprovedMap';
import { toGeoJsonHelper } from '../helpers/toGeoJsonHelper';
import { makeApiCall } from '../../../../api';
export default function SearchForm(props) {
  
  let [speciesList, setSpeciesList] = useState(null);
  let [groupList, setGroupList] = useState(null);
  let [searchSpecies, setSearchSpecies] = useState(null);
  let [searchGroup, setSearchGroup] = useState(null);
  let [showSearchFailure, setShowSearchFailure] = useState(null);
  let [showSearchError, setShowSearchError] = useState(null);
  let [rawData, setRawData] = useState(null);
  let [geoJson, setGeoJson] = useState(null);
  
  const handleSpeciesSearchChange = (event) => {
    setSearchSpecies(event.target.value);
  };
  const handleGroupSearchChange = (event) => {
    setSearchGroup(event.target.value);
  };
  const postSearchByBird = async () => {
    if (searchSpecies === 0 || setSearchSpecies === null) {
      return;
    }
    setShowSearchFailure(false);
    setShowSearchError(false);
    const response = await makeApiCall(`/birdSighting/id/${searchSpecies}`, 'GET');
    if (response && response.status === 200 && response.data.length > 0) {
      setGeoJson(toGeoJsonHelper(response.data));
    } else {
      setShowSearchFailure(true);
    }
  };
  const postSearchByGroup = async () => {
    if (searchGroup == 0 || searchGroup == null) {
      return;
    }
    setShowSearchFailure(false);
    setShowSearchError(false);
    const response = await makeApiCall(`/birdSighting/group/${searchGroup}`, 'GET');
    if (response && response.status === 200 && response.data.length > 0) {
      setGeoJson(toGeoJsonHelper(response.data));
    } else {
      setShowSearchFailure(true);
    }
  };
  useEffect(() => {
    fetchDataHelper()
      .then((data) => {
        setSpeciesList(data[0]);
        setGroupList(data[1]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const clearResults = () => {
    setGeoJson(props.geoJson);
  };
  return (
    <>
      <div className="d-flex align-items-center mb-4">
        <h6 className="mb-0 me-3 me-md-4">Species</h6>
        <div className="border-bottom flex-grow-1"></div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <select
            className="form-control dropdown-basic-single"
            type="select"
            id="speciesSearch"
            autoComplete="on"
            onChange={handleSpeciesSearchChange}
          >
            <option value="0"> Select</option>
            {speciesList &&
              speciesList.map((data) => (
                <option key={data.birdID} value={data.birdID}>
                  {data.englishName}
                </option>
              ))}
          </select>
        </div>
        <div className="col">
          <button type="submit" id="search-submitBird" className="btn btn-primary" onClick={postSearchByBird}>
            Submit
          </button>
        </div>
      </div>
      <hr className="my-7" />
      <div className="row mt-4">
        <div className="col">
          <select
            className="form-control search-select-basic-single"
            type="select"
            id="Functional Group"
            autoComplete="on"
            onChange={handleGroupSearchChange}
          >
            <option value="0"> Select</option>
            {groupList &&
              groupList.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.name}
                </option>
              ))}
          </select>
        </div>
        <div className="col">
          <button
            type="submit"
            id="search-submitBird-1"
            className="btn btn-primary"
            onClick={postSearchByGroup}
          >
            Submit
          </button>
        </div>
        {showSearchError && (
          <div className="alert alert-danger" role="alert">
            There was a problem completing your search. Try again later and contact us if the error persists.
          </div>
        )}
        {showSearchFailure && (
          <div className="alert alert-warning" role="alert">
            Your search did not return any results.
          </div>
        )}
      </div>
        <ImprovedMap geoJson={geoJson} key={2} keyVal={2} />
    </>
       
  );
}