
import { makeApiCall } from '../../api';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ReportForm from '../Components/Map/TabbedMap/ReportForm';
import React from 'react';
import { Select } from './react-select-mock'
import userEvent from '@testing-library/user-event';
import { debug } from 'jest-preview'


jest.mock('../../api');


const mockResponse = {
  data: [
    {
      "birdID": 1061,
      "fourCode": "ACFL",
      "sixCode": "EMPVIR",
      "englishName": "Acadian Flycatcher",
      "scientificName": "Empidonax virescens",
      "birdGroup": 55,
      "birdImg": "<iframe src=\"https://macaulaylibrary.org/asset/40663711/embed\" height=\"308\" width=\"320\" frameborder=\"0\" allowfullscreen></iframe>",
      "birdCall": "<iframe src=\"https://macaulaylibrary.org/asset/522997511/embed\" height=\"398\" width=\"320\" frameborder=\"0\" allowfullscreen></iframe>"
    },
    {
      "birdID": 1062,
      "fourCode": "ADWA",
      "sixCode": "SETADE",
      "englishName": "Adelaide's Warbler",
      "scientificName": "Setophaga adelaidae",
      "birdGroup": null,
      "birdImg": "<iframe src=\"https://macaulaylibrary.org/asset/523108451/embed\" height=\"316\" width=\"320\" frameborder=\"0\" allowfullscreen></iframe>",
      "birdCall": "<iframe src=\"https://macaulaylibrary.org/asset/516582021/embed\" height=\"398\" width=\"320\" frameborder=\"0\" allowfullscreen></iframe>"
    },
    {
      "birdID": 1063,
      "fourCode": "AKEK",
      "sixCode": "LOXCAE",
      "englishName": "Akekee",
      "scientificName": "Loxops caeruleirostris",
      "birdGroup": null,
      "birdImg": "<iframe src=\"https://macaulaylibrary.org/asset/512953441/embed\" height=\"301\" width=\"320\" frameborder=\"0\" allowfullscreen></iframe>",
      "birdCall": "<iframe src=\"https://macaulaylibrary.org/asset/389531421/embed\" height=\"383\" width=\"320\" frameborder=\"0\" allowfullscreen></iframe>"
    }
  ]
};

it('mock select', async () => {
  makeApiCall.mockResolvedValue(mockResponse);

  await act(async () => {
    render(<ReportForm />);
  })

  await waitFor(() => {
    const selectElement = screen.getByLabelText('select');
    expect(selectElement).toBeInTheDocument();
    fireEvent.focus(selectElement);
    fireEvent.keyDown(selectElement, { key: 'ArrowDown', code: 40 })
    
    fireEvent.click(getByText('Adelaide\'s Warbler'));
    // fireEvent.keyDown(selectElement, { key: 'Enter', keyCode: 13 })
    //   expect(handleReportChange).toHaveBeenCalledWith({ value: 1062 , label: 'Adelaide\'s Warbler'});

  });
  screen.debug();


});











