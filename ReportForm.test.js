import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import ReportForm from '../Components/Map/TabbedMap/ReportForm';
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils';


describe('ReportForm', () => {
  test('it renders', () => {
    render(<ReportForm />);
    expect(screen.getByText('Report a Sighting')).toBeInTheDocument();
  });
  test("postBirdSighting click handler called", async () => {
    const postBirdSighting = jest.fn();
    render(<ReportForm
      postBirdSighting={postBirdSighting}
    />)
    await userEvent.click(screen.getByText('submit'));
    expect(postBirdSighting).toHaveBeenCalled();
  })

})