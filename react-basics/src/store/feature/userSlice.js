import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {},
  reducers: {
    getUser() {},
    setUser(state, action) {
      console.log(state, action);
      const user = action.payload;
      return { ...state, ...user };
    },
    // getUserName(state, action) {
    //   const userName = action.payload;
    //   return userName;
    // },
    // setUserByName(state, action) {
    //   console.log(state, action);
    //   const user = action.payload;
    //   return { ...state, ...user };
    // },
  },
});
export const { getUser, setUser } = userSlice.actions;

export default userSlice.reducer;
