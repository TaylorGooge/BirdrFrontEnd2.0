import ImprovedMap from '../Map/ImprovedMap';
import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { makeApiCall } from '../../../../api';
import { fetchDataHelper } from '../helpers/fetchDataHelper';
import { fetchGeoHelper } from '../helpers/fetchGeoHelper';
import { toGeoJsonHelper } from '../helpers/toGeoJsonHelper';
import { getDatesHelper } from '../helpers/getDatesHelper';
import { filterHelper } from '../helpers/filterHelper';
import { getSeasonMonthsHelper } from '../helpers/getSeasonMonthsHelper';
import { getSeasonDateRangeHelper } from '../helpers/getSeasonDateRangeHelper';

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
    let res= filterHelper(props.rawData,seasonDateRange['start'].toISOString(), seasonDateRange['end'].toISOString());
    res = toGeoJsonHelper(res);
    setGeoJson(res);
  }
  const filter = (start, end) => {
    const features = props.rawData
    let res = filterHelper(features, start, end)
    toGeoJsonHelper(res);
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
      <a onClick={clearResults}>clear results</a>
     
    </div>
      <ImprovedMap geoJson={geoJson} key={3} keyVal={3} />
    </div>
  );
}