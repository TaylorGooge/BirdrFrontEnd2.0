import React, { useEffect, useState } from 'react';

const LocationError= ({typeMessage}) =>{
  return (
    <div className="alert alert-danger" role="alert">
      Unable to {typeMessage} because we couldn't locate you. Make sure you give Birdr permission to access your location. For help click <a href="https://birdrfrontend.taylorgooge.repl.co/help#0">here</a>

    </div>
  );
};

export default LocationError