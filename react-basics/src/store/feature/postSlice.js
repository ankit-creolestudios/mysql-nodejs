import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  posts: [],
};
const postSlice = createSlice({
  name: "postSlice",
  initialState: {},
  reducers: {
    getPostAction(state, action) {
      console.log(state, action);
      return {
        ...state,
        posts: action.payload,
      };
    },
  },
});
export const { getPostAction } = postSlice.actions;

export default postSlice.reducer;
