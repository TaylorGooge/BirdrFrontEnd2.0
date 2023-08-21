import React, { useEffect, useState } from 'react';
import { makeApiCall } from '../../../api';
import Select from 'react-select';
import axios from 'axios';
import Gallery from './Gallery';
import BirdTable from './BirdTable';


const Learn = () => {
  let [speciesList, setSpeciesList] = useState(null);
  let [searchValue, setSearchValue] = useState(null);
  let [showImg, setShowImg] = useState(false);
  let [images, setImages] = useState(null);
  let [showError, setShowError] = useState(false);
  let [tableData, setTableData] = useState(null);
  let [showTable, setShowTable] = useState(false);
  let [urlSearch, setUrlSearch] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const speciesResponse = await makeApiCall('/birdCodes', "GET")
        setSpeciesList(speciesResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const checkUrl = () => {
    const url = window.location.href;
    const lastSlashIndex = url.lastIndexOf("/");
    const optionalUrl = url.substring(lastSlashIndex + 1);
    if (optionalUrl !== 'learn') {
      postSearchByID(optionalUrl)
    }
  };

  useEffect(() => {
    if (urlSearch !== null) {
      postSearchByUrl(urlSearch)
    }
  }, [urlSearch])

  useEffect(() => {
    if (urlSearch === null && !showImg && !showError && !showTable) {
      checkUrl();
    }
  }, []);

  useEffect(() => {
    if (searchValue !== null) {
      postBirdSearch();
    }
  }, [searchValue]);


  const postSearchByID = async (id) => {
    try {
      const birdResponse = await makeApiCall(`/birdSighting/id/${id}`, "GET")
      if (birdResponse.data.length > 0) {
        setUrlSearch(birdResponse.data[0]['scientificName']);
      } else {
        setShowError(true);
      }

    } catch (error) {
      console.log(error);
    }

  };
  const handleSearchChange = selectedOption => {
    setSearchValue(selectedOption.scientificName);
  }

  const postSearchByUrl = async () => {
    setShowImg(false);
    setShowError(false);
    setTableData(null);
    setShowTable(false);

    try {
      const response = await axios.get(`https://nuthatch.lastelm.software/v2/birds?page=1&pageSize=25&sciName=${urlSearch}`, {
        headers: {
          "api-key": import.meta.env.VITE_nuthatchapi
        }
      });
      if (response.status === 200 && response.data) {

        let data = response.data
        if (data["total"] < 1) {
          setShowError(true)
          return
        }
        if (data.entities[0].hasOwnProperty('images') && data.entities[0].images !== null) {
          setShowImg(true)
          setImages(data.entities[0].images)
        }
        setShowTable(true)
        setTableData(data.entities[0])
      }
    } catch (error) {
      console.log(error);
    }

  }

  const postBirdSearch = async () => {
    setShowImg(false);
    setShowError(false);
    setTableData(null);
    setShowTable(false);

    try {
      const response = await axios.get(`https://nuthatch.lastelm.software/v2/birds?page=1&pageSize=25&sciName=${searchValue}`, {
        headers: {
          "api-key": "81d6d04d-7731-4880-b1ea-699b4f314099"
        }
      });
      if (response.status === 200 && response.data) {

        let data = response.data
        if (data["total"] < 1) {
          setShowError(true)
          return
        }
        if (data.entities[0].hasOwnProperty('images') && data.entities[0].images !== null) {
          setShowImg(true)
          setImages(data.entities[0].images)
        }
        setShowTable(true)
        setTableData(data.entities[0])
      }
    } catch (error) {
      console.log(error);
    }

  }

  return (
    // Add your JSX code for the LearnPage component
    <main className="main-content pb-4" id="main-content">
      <section className="position-relative bg-gradient-tint">
        <div className="container position-relative pt-14 pb-9">
          <div className="row pt-lg-9 pb-lg-4">
            <div className="col-lg-10 mx-auto text-center">
              <h1 className="display-3 mb-2">On the wings of discovery</h1>
              <p className="lead mb-0">Find birds and unlock the secrets of their lives</p>
            </div>
          </div>
        </div>
      </section>
      <section className="border-bottom">
        <div className="container py-9 py-lg-11">
          <div className="d-flex align-items-center mb-5">
            <h6 className="mb-0 flex-grow-0 pe-3">Search for a Bird to Learn More</h6>
            <div className="flex-grow-1 pb-1 border-bottom border-light"></div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <Select
                className="form-control bird-select-basic-single"
                maxMenuHeight={150}
                type="select"
                id="birdName"
                autoComplete="on"
                aria-label="select"
                onChange={handleSearchChange}
                getOptionLabel={option => option.englishName}
                getOptionValue={option => option.birdId}
                options={speciesList}
              >
            ))}
              </Select>
            </div>
            <div className="col">
              <button id="submitBird" className="btn btn-primary" onClick={postBirdSearch} >
                Submit
              </button>
            </div>
            {showError && <div className="alert alert-danger" role="alert">We don't currently have any information to display about this bird.</div>}
          </div>
        </div>
      </section>
      {showImg && <Gallery images={images} />}
      {showTable && <BirdTable data={tableData} />}

    </main>
  );
};
export default Learn;