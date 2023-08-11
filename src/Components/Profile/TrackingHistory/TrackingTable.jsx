import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const TrackingTable = (props) => {

  const [loggedBird, setLoggedBird] = useState(props.data);


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US');
  };

  const initializeDataTable = () => {
    $(document).ready(function() {
      $('#tracking-table').DataTable();
    });
  }
  useEffect(() => {
    initializeDataTable();
  }, []);
  useEffect(() => {
    setLoggedBird(props.data);
  }, [props.data])

  return (
    <table className="table table-striped table-responsive" id="tracking-table">
      {props.showDeleteError && <div className="alert alert-danger">
        <strong>Error:</strong> Unable to delete tracking history.
      </div>}
      <thead>
        <tr>
          <th>English Name</th>
          <th>Scientific Name</th>
          <th>Date</th>
          {/* <th>Update</th> */}
          <th>Delete</th>
        </tr>
      </thead>
      <tbody className='tbody'>
        {loggedBird.map((item, index) => (
          <tr key={item.id}>
            <td><a href={`/learn/${item.birdID}`}>{item.englishName}</a></td>
            <td>{item.scientificName}</td>
            <td>{item.date}</td>
            {/* <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleUpdate(item.id)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} /> Update
                </button>
            </td> */}
            <td>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => props.handleDelete(item.id)}
              >
                <FontAwesomeIcon icon={faBan} /> Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TrackingTable;