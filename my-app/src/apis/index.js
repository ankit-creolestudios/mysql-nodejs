import axios from "axios";
axios.defaults.baseURL = `https://localhost:5000`;
const getUsers = async () => {
  axios.get("/user");
};
const getUserByIdApi = (id) => {
  axios.get(`/user/${id}`);
};
const addUserApi = (user) => {
  axios.post("/user", user);
};
export { getUsers, getUserByIdApi, addUserApi };
