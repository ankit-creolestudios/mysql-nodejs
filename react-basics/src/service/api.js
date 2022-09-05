import axios from "axios";
export const getUserApi = async () => {
  const res = await axios.get(`https://swapi.dev/api/people`);
  return res;
};
export const getUserByNameApi = async (search) => {
  const res = await axios.get(`https://swapi.dev/api/people/?search=${search}`);
  return res;
};
