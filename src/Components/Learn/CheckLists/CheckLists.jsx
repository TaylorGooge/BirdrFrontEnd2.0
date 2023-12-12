import React, { useState, useEffect } from 'react';
import { makeApiCall } from '../../../../api';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import BaseSection from '../../Reusable/Section/BaseSection';
const CheckLists = () => {

  const [showFetchError, setShowFetchError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkLists, setCheckLists] = useState(null);
  const [totalsArray, setTotalsArray] = useState(null)
  const { user } = useAuth0();

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
      getCheckLists();

    }

  }, []);

  useEffect(() => {
    if (checkLists && user) {
      getProgress()
    }

  }, [checkLists, user]);

  const getProgress = async () => {
    let computedTotalsArray = []
    for (let item of checkLists) {
      let id = item.id
      const responseTotals = await makeApiCall(`/checklists/totals/${id}/${user.sub}`, "GET");
      if (responseTotals.status == 200) {
        let tempRes = { listLength: responseTotals.data[0].listLength, totalSighted: responseTotals.data[0].totalSighted, id: id }

        computedTotalsArray.push(tempRes);
      }
    }
    setTotalsArray(computedTotalsArray);
  }

  const getCheckLists = async () => {

    try {
      const response = await makeApiCall(`/checklists`, "GET");


      if (response.status == 200) {
        setShowFetchError(false);
        setCheckLists(response.data);
      }
      else {
        setShowFetchError(true);
      }
    } catch (error) {
      setShowFetchError(true);
    }
  };



  return (
    <main className="main-content pb-4" id="main-content">
      <BaseSection
        sectionClassName="position-relative bg-gradient-tint"
      >
        <div className="container position-relative pt-14 pb-9">
          <div className="row pt-lg-9 pb-lg-4">
            <div className="col-lg-10 mx-auto text-center">
              <h1 className="display-3 mb-2">Aviary Insight</h1>
              <p className="lead mb-0">Elevating Birding Checklists</p>
            </div>
          </div>
        </div>
      </BaseSection>
      <BaseSection
        sectionClassName="border-bottom"
      >
        <div className="container py-9 py-lg-11">
          <div className="d-flex align-items-center mb-5">

            <div className="position-relative">
              <h1> What are bird watching check lists? </h1>
              <p className="mb-3 w-lg-75">
                A bird watching checklist is a catalog of avian species present in a specific geographic area. As a standardized tool, it assists birdwatchers in identifying and recording various bird species they encounter. The checklist is organized in phylogenetic order, reflecting the evolutionary journey of different species, with codes indicating behavior such as year-round presence (R), breeding (B), migration (M), winter residence (W), and accidental occurrence (A). Birdr, a user-friendly platform, is designed to enhance the birdwatching experience by offering curated checklists from authoritiative sources such as the American Ornithological Society.
              </p>
            </div>
          </div>
          <h5 className="mb-0 flex-grow-0 pe-3">Currently Supported Checklists</h5>
          <div className="flex-grow-1 pb-1 border-bottom border-light"></div>
          <div className="row mt-4">
            <div className="col">
              {!isLoggedIn && 
                <div className="alert alert-warning">
                  <strong>Warning:</strong> Checklists are available to registered users.
                </div>
              }
              {showFetchError ? (
                <div className="alert alert-danger">
                  <strong>Error:</strong> Unable to fetch checklists.
                </div>
              ) : (
                <table>
                  <tbody>
                    {checkLists && checkLists.map(checkList => (
                      <tr key={checkList.id}>
                        <td className='p-2'>
                          <Link
                            to={`/learn/checklists/single/${checkList.id}`}
                            state={{ name: checkList.name, id: checkList.id }}
                          >
                            {checkList.name}
                          </Link>
                        </td>
                        {user && totalsArray && totalsArray.find(total => total.id === checkList.id) && (
                          <td className='p-2'>
                            Your progress: {
                              ((totalsArray.find(total => total.id === checkList.id).totalSighted / totalsArray.find(total => total.id === checkList.id).listLength) * 100).toFixed(2)
                            }%
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

            </div>



          </div>
        </div>
      </BaseSection>



    </main>
  );
}
export default CheckLists;