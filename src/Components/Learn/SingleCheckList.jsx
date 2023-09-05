import React, { useState, useEffect } from 'react';
import { makeApiCall } from '../../../api';
import Table from './Table';
import { useLocation } from 'react-router-dom';


const SingleCheckList = () => {

  const [showFetchError, setShowFetchError] = useState(false);
  const [checkLists, setCheckLists] = useState(null);
  const location = useLocation();

  const name = location.state.name;
  const id = location.state.id

  if (!id) {
    return (
      <Error />
    )
  }

  useEffect(() => {
    if (id) {  // only call getCheckList if id is not undefined
      getCheckList();
    }
  }, [id]);

  const getCheckList = async () => {
    try {
      const response = await makeApiCall(`/checklists/${id}`, "GET");
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
            <h6 className="mb-0 flex-grow-0 pe-3">{name}</h6>
            <div className="flex-grow-1 pb-1 border-bottom border-light"></div>
          </div>
          <div className="row mt-4">
            <div className="col">
              {showFetchError ? (
                <div className="alert alert-danger">
                  <strong>Error:</strong> Unable to fetch that check lists.
                </div>
              ) : (
                checkLists && <Table data={checkLists} cols={[ 'rank', 'english name', 'order', 'family', 'subfamily', 'genus', 'scientific name', 'annotation', 'Accidental', 'Extinct', 'Misplaced', 'Nonbreeding']} />
              )}
            </div>



          </div>
        </div>
      </section>


    </main>
  );
}
export default SingleCheckList;