import { test, it, mock } from 'vitest'
import { postSearchByBird, postSearchByGroup } from '../../Components/Map/TabbedMap/SearchForm'
import { makeApiCall } from '../../../api'

let mockMakeApiCall;

it('postSearchByBird param options', () => {
  test('postSearchByBird returns with null param', async ({ expect }) => {
    const searchSpecies = mock(null)
    let result = postSearchByBird(searchSpecies);
    expect(result).toHaveReturned()
  })

  test('postSearchByBird returns with zero param', async ({ expect }) => {
    const searchSpecies = mock(0)
    let result = postSearchByBird(searchSpecies);
    expect(result).toHaveReturned()
  })

  test('postSearchByBird returns with valid param', async ({ expect }) => {
    mockMakeApiCall = jest.spyOn(makeApiCall, 'makeApiCall');
    mockMakeApiCall.mockResolvedValueOnce({ status: 200 });
    const searchSpecies = mock(1063)
    postSearchByBird(searchSpecies);
    expect(mockMakeApiCall).toHaveBeenCalledWith('/birdSighting', 'GET', searchSpecies);
    mockMakeApiCall.mockRestore()
  })


})

it('postSearchByGroup param options', () => {
  test('postSearchByGroup returns with null param', async ({ expect }) => {
    const searchGroup = mock(null)
    let result = postSearchByGroup(searchGroup);
    expect(result).toHaveReturned()
  })

  test('postSearchByGroup returns with zero param', async ({ expect }) => {
    const searchGroup = mock(0)
    let result = postSearchByGroup(searchGroup);
    expect(result).toHaveReturned()
  })

  test('postSearchByGroup returns with valid param', async ({ expect }) => {
    mockMakeApiCall = jest.spyOn(makeApiCall, 'makeApiCall');
    mockMakeApiCall.mockResolvedValueOnce({ status: 200 });
    const searchGroup = mock(13)
    postSearchByGroup(searchGroup);
    expect(mockMakeApiCall).toHaveBeenCalledWith('/birdSighting', 'GET', searchSpecies);
    mockMakeApiCall.mockRestore()
  })


})