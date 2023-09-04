import React, { useEffect, useState } from 'react';

export default function LocationError() {
  return (
    <div className="alert alert-danger" role="alert">
      Unable to log sighting because we couldn't locate you. Make sure you give Birdr permission to access your location. For help click <a href="https://birdrfrontend.taylorgooge.repl.co/help#0">here</a>
    </div>
  );
};