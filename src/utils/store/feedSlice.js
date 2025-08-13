import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    fed: null,
  },
  reducers: {
    addFeed: (state, actions) => {
      state.fed = actions.payload;
    },
    removeFeed: (state, actions) => {
      state.fed = null;
    },
    removeUserFromFeed: (state, actions) => {
      let updatedArray = state.fed.filter(
        (user) => user._id != actions.payload
      );
      state.fed = updatedArray;
    },
  },
});

export const { addFeed, removeFeed, removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer;
