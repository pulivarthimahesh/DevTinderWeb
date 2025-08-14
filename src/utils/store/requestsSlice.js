import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequests: (state, actions) => actions.payload,
    removeRequest: (state, actions) => {
      let updatedArray = state.filter(
        (request) => request._id != actions.payload
      );
      state = updatedArray;
    },
  },
});

export const { addRequests, removeRequest } = requestsSlice.actions;
export default requestsSlice.reducer;
