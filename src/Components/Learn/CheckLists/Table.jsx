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
          <th key={'sighted'}>sighted</th>
        </tr>
      </thead>
      <tbody className='tbody'>
        {props.data.map((item, index) => (
          <tr key={index}>
            {Object.keys(item).map((key, i) => (
              <td key={i}>{item[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;