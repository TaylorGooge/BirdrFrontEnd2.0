import { makeApiCall } from '../../../../api';

export async function fetchGeoHelper() {
  try {
    const response = await makeApiCall("/birdSighting", "GET");
    return response.data
  } catch (error) {
    return false
  }
}
