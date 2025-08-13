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
  },
});

export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;
