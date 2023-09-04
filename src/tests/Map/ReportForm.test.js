import { test, it } from 'vitest'
import { postBirdSighting } from '../../Components/Map/TabbedMap/ReportForm'
import { makeApiCall } from '../../../api'

let mockMakeApiCall;

it('postBirdSightings param options', () => {
  test('postBirdSighting returns with null param', async ({ expect }) => {
    const searchSpecies = mock(null)
    let result = postBirdSighting(searchSpecies);
    expect(result).toHaveReturned()

  })

  test('postBirdSighting returns with zero param', async ({ expect }) => {
    const searchSpecies = mock(0)
    let result = postBirdSighting(searchSpecies);
    expect(result).toHaveReturned()

  })

  test('postBirdSighting returns with valid param', async ({ expect }) => {
    mockMakeApiCall = jest.spyOn(makeApiCall, 'makeApiCall');
    mockMakeApiCall.mockResolvedValueOnce({ status: 200 });
    const searchSpecies = mock(1063)
    postBirdSighting(searchSpecies);
    expect(mockMakeApiCall).toHaveBeenCalledWith('/birdSighting', 'POST', searchSpecies);
    mockMakeApiCall.mockRestore()

  })



})