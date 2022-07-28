const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  id: "",
  name: "",
  email: "",
  password: "",
  users: [],
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersSlice: (state, action) => {
      state = action.payload;
      return state;
    },
    getUserByIdSlice: (state, action) => {
      state = action.payload;
      return state;
    },
    addUser: (state, action) => {
      console.log(state, action);
      state.users.push(action.payload.user);
      return state;
    },
  },
});

export const { getUsersSlice, getUserByIdSlice, addUser } = userSlice.actions;

export default userSlice.reducer;
