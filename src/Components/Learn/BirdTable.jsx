import React, { useState, useEffect } from 'react';


const BirdTable = (props) => {


  return (
    <section className="position-relative">
      <div className="container position-relative">
        <table className="table table-striped table-responsive" id="tracking-table">
          <tbody className='tbody'>
            <tr key={props.data}>
              <th>English Name</th>
              <td>{props.data.name}</td>
            </tr>
            <tr>
              <th>Scientific Name</th>
              <td>{props.data.sciName}</td>
            </tr>
            <tr>
              <th>Family</th>
              <td>{props.data.family}</td>
            </tr>
            <tr>
              <th>Order</th>
              <td>{props.data.order}</td>
            </tr>
            <tr>
              <th>Length</th>
              <td> {props.data.lengthMin ? `Min length: ${props.data.lengthMin}` : null} {props.data.lengthMax ? `Max length: ${props.data.lengthMax}` : null}</td>
            </tr>
            <tr>
              <th>Wingspan</th>
              <td> {props.data.wingspanMin ? `Min wingspan: ${props.data.wingspanMin}` : null} {props.data.winspanMax ? `Max length: ${props.data.winspanMax}` : null} </td>
            </tr>
            <tr>
              <th>Region</th>
              <td>{props.data.region}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{props.data.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default BirdTable;