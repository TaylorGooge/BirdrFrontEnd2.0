import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Table = (props) => {

  const initializeDataTable = () => {
    $(document).ready(function() {
      $('#tracking-table').DataTable();
    });
  }

  useEffect(() => {
    initializeDataTable();
  }, [props.cols, props.data]);


  return (
    <table className="table table-striped table-responsive" id="tracking-table">
      <thead>
        <tr>
          {props.cols.map(val => (<th key={val}>{val}</th>))}
        </tr>
      </thead>
      <tbody className='tbody'>
        {props.data.map((item, index) => (
          <tr key={index}>
            <td>{item.birdRank}</td>
            <td>{item.englishName}</td>
            <td>{item.orderName}</td>
            <td>{item.family}</td>
            <td>{item.subFamily}</td>
            <td>{item.genus}</td>
            <td>{item.scientificName}</td>
            <td>{item.annotation}</td>
            <td>{item.statusAccidental}</td>
            <td>{item.statusExtinct}</td>
            <td>{item.statusMisplaced}</td>
            <td>{item.statusNonbreeding}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;