import { makeApiCall } from '../../../../api';

export async function postSearchByGroupHelper() {
  try{
    const speciesList = await makeApiCall('/birdCodes', 'GET')
    const groupList = await makeApiCall('/birdCategories', 'GET')
    return [speciesList.data, groupList.data];
  } catch (error) {
    return false
  }
}
