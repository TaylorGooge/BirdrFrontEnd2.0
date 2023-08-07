import React, { useEffect, useState } from 'react';
import { makeApiCall } from '../../../api';
import { Chart } from "react-google-charts";

const Data = () => {
  let [speciesData, setSpeciesData] = useState([]);
  let [groupData, setGroupData] = useState([]);
  let [locationData, setLocationData] = useState([]);
  var options1 = {
    'width': 'auto',
    'height': 'auto',
    'pieSliceText': 'value',
  };
  var options2 = {
    'region': 'US',
    'width': 'auto',
    'height': 'auto',
    'showTooltip': true,
    'showInfoWindow': true,
    'zoomLevel': 4
  };

  useEffect(() => {
    const fetchData = async () => {
      const locData = await makeApiCall('/data/birdrlocations');
      if (locData) {
        setLocationData(locData.data)
      }
      const specData = await makeApiCall('/data/top10species');
      if (specData) {
        let fixedSpecData = [
          ['Species-EnglishName', 'Count'],
        ]
        specData.data.map((item) => {
          fixedSpecData.push([item.englishName, item.Count])
        })
        setSpeciesData(fixedSpecData)
      }
      const gData = await makeApiCall('/data/top10group');
      if (gData) {
        let fixedGData = [
          ['Group', 'Count'],
        ]
        gData.data.map((item) => {
          fixedGData.push([item.name, item.Count])

        })
        setGroupData(fixedGData)
      }
    };
    fetchData();
  }, []);
  return (
    <main className="main-content pb-4" id="main-content">
      <section className="position-relative bg-gradient-tint">

        <div className="container position-relative pt-14 pb-9">
          <div className="row pt-lg-9 pb-lg-4">
            <div className="col-lg-10 mx-auto text-center">
              <h1 className="display-3 mb-2">Data Nest</h1>
              <p className="lead mb-0">Where Data Takes Flight</p>
              <span className="text-center d-inline-block">
                <p className="lead">Want to help improve our data?</p>
                <a className="btn btn-primary btn-lg w-100" href="/map" role="button">Get Started with Birdr</a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-4" />
      <div className="container-fluid" >
        
        <h2  data-aos="fade-down" data-aos-delay="100">Top 10 Frequently Sighted Birds- By English Name</h2>
        <div className="d-flex justify-content-center hover-lift hover-shadow-xl" id="top10species" data-aos="fade-up" data-aos-delay="100">
          
          <Chart
            chartType="PieChart"
            data={speciesData}
            options={options1}
            legendToggle
          />
        </div>
        <hr className="my-4" />
        <h2  data-aos="fade-down" data-aos-delay="100">Top 10 Frequently Sighted Birds- By Functional Group</h2>
        <div className="d-flex justify-content-center hover-lift hover-shadow-xl" id="top10group" data-aos="fade-up" data-aos-delay="100">
          <Chart
            chartType="PieChart"
            data={groupData}
            options={options1}
            legendToggle
          />
        </div>
      </div>
      <hr className="my-4" />
      <div className="container-fluid">
        <h2  data-aos="fade-down" data-aos-delay="100">Where are people using Birdr?</h2>
        <div className="d-flex justify-content-center hover-lift hover-shadow-xl" id="overallMap" data-aos="fade-up" data-aos-delay="100">
          <Chart
            chartType="GeoChart"
            options={options2}
            data={locationData}
          />
        </div>
      </div>
    </main>
  );
};
export default Data;