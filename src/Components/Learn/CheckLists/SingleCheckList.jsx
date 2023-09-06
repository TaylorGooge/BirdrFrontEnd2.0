import React, { useState, useEffect } from 'react';
import { makeApiCall } from '../../../../api';
import { useLocation } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Table from './Table'


const SingleCheckList = () => {

  const [showFetchError, setShowFetchError] = useState(false);
  const [checkLists, setCheckLists] = useState(null);
  const [checkListCols, setCheckListsCols] = useState(null);
  const [totals, setTotals] = useState(null);
  const location = useLocation();

  const name = location.state.name;
  const id = location.state.id
  const { user, isAuthenticated } = useAuth0();

  if (!id || !name) {
    return (
      <Error />
    )
  }

  useEffect(() => {
    if (id, user) {
      getCheckList();
    }

  }, [id, user, name]);

  const getCheckList = async () => {
    const response = await makeApiCall(`/checklists/${id}/${user.sub}`, "GET");
    const responseTotals = await makeApiCall(`/checklists/totals/${id}/${user.sub}`, "GET");
    if (response.status == 200) {
      setShowFetchError(false);
      setCheckLists(response.data['results']);
      setCheckListsCols(response.data['rows']);
    }
    else {
      setShowFetchError(true);
    }
    if (responseTotals.status == 200) {

      setTotals(responseTotals.data[0]);
    }
  };


  return (
    isAuthenticated && (<main className="main-content pb-4" id="main-content">
      <section className="position-relative bg-gradient-tint">
        <div className="container position-relative pt-14 pb-9">
          <div className="row pt-lg-9 pb-lg-4">
            <div className="col-lg-10 mx-auto text-center">
              <h1 className="display-3 mb-2">Bird's Eye View</h1>
              <p className="lead mb-0">{name ? name : 'Find birds and unlock the secrets of their lives'}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="border-bottom">
        <div className="container py-9 py-lg-11">
          <div className="d-flex align-items-center mb-5">
            <h6 className="mb-0 flex-grow-0 pe-3">{name? name : 'checklist'}</h6>
            {totals ? (
              <div>
                <p>Total Birds Sighted: {totals['totalSighted']}</p>
                <p>Total Birds in the List: {totals.listLength}</p>
                <p>Percentage Progress: {((totals.totalSighted / totals.listLength) * 100).toFixed(2)}%</p>
              </div>
            ) : (
              <p>Loading...</p>
            )}

            <div className="flex-grow-1 pb-1 border-bottom border-light"></div>
          </div>
          <div className="row mt-4">
            <div className="col">
              {showFetchError ? (
                <div className="alert alert-danger">
                  <strong>Error:</strong> Unable to fetch that check lists.
                </div>
              ) : (
                checkLists && <Table data={checkLists} cols={checkListCols} />
              )}
            </div>
          </div>
        </div>
      </section>
    </main>)
  );
}
export default SingleCheckList;