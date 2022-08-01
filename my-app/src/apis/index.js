import axios from "axios";
axios.defaults.baseURL = `https://localhost:5000`;
const getUsersApi = async () => {
  axios.get("/users");
};
const getUserByIdApi = (id) => {
  axios.get(`/users/${id}`);
};
const addUserApi = (user) => {
  axios.post("/users", user);
};
export { getUsersApi, getUserByIdApi, addUserApi };
