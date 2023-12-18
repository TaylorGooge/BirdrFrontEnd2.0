import axios from "axios";
const BASE_URL = import.meta.env.VITE_nodebaseurl;
const api = axios.create({
  baseURL: BASE_URL,

});
const makeApiCall = async (url, method, data) => {
  try {
    const response = await api.request({
      url: url,
      method: method,
      data: data,
    });
    return response;
  } catch (error) {
    console.error(error);
    // Handle error
    throw error;
  }
};
export { makeApiCall };