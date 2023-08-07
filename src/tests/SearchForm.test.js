import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import SearchForm from '../Components/Map/TabbedMap/SearchForm';
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils';
import 'jest-environment-jsdom-global';

describe('ReportForm', () => {
  test('it renders', () => {
    render(<SearchForm />);
    expect(screen.getByText('Species')).toBeInTheDocument();
  });

  test("postBirdSighting click handler called", async () => {
    const postSearchByBird = jest.fn();

    render(<SearchForm
      postSearchByBird={postSearchByBird}
    />)
    const button = screen.getByTestId('search-submitBird');
    await userEvent.click(button);
    //expect(postSearchByBird).toHaveBeenCalled();
    screen.debug();
  })

})