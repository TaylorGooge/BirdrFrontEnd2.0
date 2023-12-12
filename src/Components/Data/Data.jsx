import React, { useEffect, useState } from 'react';
import { makeApiCall } from '../../../api';
import PieChart from './PieChart';
import Map from './Map';
import BaseSection from '../Reusable/Section/BaseSection'
import {Container, Row} from 'react-bootstrap'


const Data = () => {
  let [speciesData, setSpeciesData] = useState(null);
  let [groupData, setGroupData] = useState(null);
  let [locationData, setLocationData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const locData = await makeApiCall('/data/birdrlocations');
      const markers = []
      if (locData) {
        locData.data.map((item, index) => {
          if (index == 0) {

          } else {
            let tempObj = {
              makerOffset: 25,
              name: item[2],
              coordinates: [item[1], item[0]]
            }
            markers.push(tempObj);

          }
        })
        setLocationData(markers)
      }

      let fixedSpecData = {
        series: [],
        options: {
          chart: {
            width: '100%',
            type: 'pie',
          },
          labels: [],
          // theme: {
          //   monochrome: {
          //     enabled: true
          //   }
          // },
          plotOptions: {
            pie: {
              dataLabels: {
                offset: -5
              }
            }
          },
          // title: {
          //   text: "Monochrome Pie"
          // },
          dataLabels: {
            formatter(val, opts) {
              const name = opts.w.globals.labels[opts.seriesIndex]
              return [name, val.toFixed(1) + '%']
            }
          },
          legend: {
            show: false
          }
        },
      };

      const specData = await makeApiCall('/data/top10species');
      if (specData) {
        specData.data.map((item) => {
          fixedSpecData['series'].push(item.Count)
          fixedSpecData['options']['labels'].push(item.englishName)
        })
        setSpeciesData(fixedSpecData)
      }
      let fixedGroupData = {
        series: [],
        options: {
          chart: {
            width: '100%',
            type: 'pie',
          },
          labels: [],
          // theme: {
          //   monochrome: {
          //     enabled: true
          //   }
          // },
          plotOptions: {
            pie: {
              dataLabels: {
                offset: -5
              }
            }
          },
          // title: {
          //   text: "Monochrome Pie"
          // },
          dataLabels: {
            formatter(val, opts) {
              const name = opts.w.globals.labels[opts.seriesIndex]
              return [name, val.toFixed(1) + '%']
            }
          },
          legend: {
            show: false
          }
        },
      };
      const gData = await makeApiCall('/data/top10group');
      if (gData) {
        gData.data.map((item) => {
          fixedGroupData['series'].push(item.Count)
          fixedGroupData['options']['labels'].push(item.name)
        })
        setGroupData(fixedGroupData)
      }
    };
    fetchData();
  }, []);
  return (
    <main className="main-content pb-4" id="main-content">
      <BaseSection 
        sectionClassName="position-relative bg-gradient-tint"
      >
        <Container className="container position-relative pt-14 pb-9">
          <Row className="row pt-lg-9 pb-lg-4">
            <div className="col-lg-10 mx-auto text-center">
              <h1 className="display-3 mb-2">Data Nest</h1>
              <p className="lead mb-0">Where Data Takes Flight</p>
              <span className="text-center d-inline-block">
                <p className="lead">Want to help improve our data?</p>
                <a className="btn btn-primary btn-lg w-100" href="/map" role="button">Get Started with Birdr</a>
              </span>
            </div>
          </Row>
        </Container>
      </BaseSection>

      <hr className="my-4" />
      <Container fluid >
        <h2 data-aos="fade-down" data-aos-delay="100">Top 10 Frequently Sighted Birds- By English Name</h2>
        <div className="d-flex justify-content-center hover-lift hover-shadow-xl" id="top10species" data-aos="fade-up" data-aos-delay="100">
          {speciesData && <PieChart data={speciesData} />}

        </div>
        <hr className="my-4" />
        <h2 data-aos="fade-down" data-aos-delay="100">Top 10 Frequently Sighted Birds- By Functional Group</h2>
        <div className="d-flex justify-content-center hover-lift hover-shadow-xl" id="top10group" data-aos="fade-up" data-aos-delay="100">
          {groupData && <PieChart data={groupData} />}
        </div>
      </Container>
      <hr className="my-4" />
      <Container fluid >
        <h2 data-aos="fade-down" data-aos-delay="100">Where are people using Birdr?</h2>
        <div className="d-flex justify-content-center hover-lift hover-shadow-xl" id="overallMap" data-aos="fade-up" data-aos-delay="100">

          {locationData && <Map data={locationData} />}
        </div>
      </Container>
    </main>
  );
};
export default Data;