// react-select.mock.js
import React from 'react';

export const Select = ({ options, onChange }) => (
  <select data-testid="birdName" onChange={onChange}>
    {options && options.map((option) => (
      <option key={option.birdId} value={option.birdId}>{option.englishName}</option>
    ))}
  </select>
);