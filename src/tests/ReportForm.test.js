
import { makeApiCall } from '../../api';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import ReportForm from '../Components/Map/TabbedMap/ReportForm';
import React from 'react';
import Select from 'react-select'
import selectEvent from 'react-select-event'

jest.mock('../../api');

describe('ReportForm Component', () => {
  it('showLocError is displayed', async () => {
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

    // Mock the apiService's makeApiCall function
    makeApiCall.mockResolvedValue(mockResponse);
    // Mock the geolocation API to always call the error callback
    const mockGeolocation = {
      getCurrentPosition: jest.fn((success, error) => {
        // Call the error callback directly
        error({ message: 'Geolocation is not available.' });
      })
    };
    const originalGeolocation = global.navigator.geolocation;
    global.navigator.geolocation = mockGeolocation;

    // Render the component within the act function
    act(() => {
      render(<ReportForm />);
    });


    // Simulate user interaction to trigger async operation
    fireEvent.click(screen.getByTestId('submitBird'));

    // Use waitFor to wait for async changes and assertions
    await waitFor(() => {
      const errorAlert = screen.getByTestId('showLocErrorTest');
      expect(errorAlert).toBeInTheDocument();
    }, { timeout: 3000 });

    global.navigator.geolocation = originalGeolocation;


  });
});








