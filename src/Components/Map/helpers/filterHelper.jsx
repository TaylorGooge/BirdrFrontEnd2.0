import axios from 'axios';
import { toGeoJsonHelper } from './toGeoJsonHelper';
export async function filterHelper(start, end) {
  let startDate = new Date(start).toISOString().replace(/T/g, ' ').replace(/\.\d+Z$/g, '');
  let endDate = new Date(end).toISOString().replace(/T/g, ' ').replace(/\.\d+Z$/g, '');
  try {
    const response = await axios.get('https://birdrapi-83d15ff7da21.herokuapp.com/birdSighting/date', {
      params: {
        start: startDate,
        end: endDate
      }
    });
    if (response.data) {
      return toGeoJsonHelper(response.data);
    }
    return false;
  } catch (error) {
    console.error(error);
  }
}