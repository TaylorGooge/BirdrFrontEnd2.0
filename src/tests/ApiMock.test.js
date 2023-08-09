
import { makeApiCall } from '../../api';

jest.mock('../../api');

describe('API Mocking', () => {
  it('should mock API call successfully', async () => {
    const mockResponse = { data: 'mocked response' };

    // Mock the makeApiCall function to return the mock response
    makeApiCall.mockResolvedValue(mockResponse);

    // Call the makeApiCall function
    const response = await makeApiCall('/birdCodes', 'GET');

    // Assert that the response matches the mock response
    expect(response).toEqual(mockResponse);
  });

  // ... other tests
});