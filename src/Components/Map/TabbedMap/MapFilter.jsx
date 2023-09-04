import ImprovedMap from '../Map/ImprovedMap';
import React, { useEffect, useState } from 'react';
import { makeApiCall } from '../../../../api';
import { toGeoJsonHelper } from '../helpers/toGeoJsonHelper';
import { getDatesHelper } from '../helpers/getDatesHelper';
import { filterHelper } from '../helpers/filterHelper';
import dateResolver from 'date-season';


export default function MapFilter(props) {
  const [selectedValue, setSelectedValue] = useState('');
  let [geoJson, setGeoJson] = useState(null);

  const handleCheckboxChange = (event) => {
    setSelectedValue(event.target.value);
    showVal(event.target.value)
  };

  useEffect(() => {
    setGeoJson(props.geoJson);
  }, []);

  const showVal = (val) => {
    if (val == 1) {
      return getDates(7);
    }
    else if (val == 2) {
      return getDates(30);
    }
    else if (val == 3) {
      return getSeason();
    }
    else if (val == 4) {
      return getDates(365);
    }
    else if (val == 5) {
      return clearResults();
    }
  };

  const getDates = (int) => {
    let result = getDatesHelper(int)
    filter(result[0], result[1]);
  }

  const getSeason = async (currentDate = null) => {
    const currDate = currentDate || new Date();
    const NorthernHemisphere = dateResolver();
    const season = NorthernHemisphere(currDate);
    const year = currDate.getFullYear();
    try {
      const response = await makeApiCall(`/birdSighting/year/${year}/season/${season}`, 'GET');
      if (response.data) {
        let data = toGeoJsonHelper(response.data)
        setGeoJson(data)

      }
    } catch (error) {
      console.log(error)
    }
  }

  const filter = async (start, end) => {
    let res = await filterHelper(start.toISOString(), end.toISOString());
    setGeoJson(res)
  }

  const clearResults = () => {
    setGeoJson(props.geoJson);
  }

  return (
    <div>
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
        <a id='clearFilters' onClick={clearResults}>clear results</a>
        {props.locError && (
          <LocationError />
        )}

      </div>
      <hr className="my-7" />
      <ImprovedMap geoJson={geoJson ? geoJson : props.geoJson} key={3} keyVal={3} />
    </div>
  );
}