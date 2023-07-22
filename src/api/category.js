import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_URL;

export const getCategories = () => {
  const url = `${BASE_URL}/categories`;
  return axios.get(url);
};
