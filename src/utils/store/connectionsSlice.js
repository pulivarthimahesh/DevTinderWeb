import { createSlice } from "@reduxjs/toolkit";

const connectionsSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    addConnections: (state, actions) => actions.payload,
    removeConnection: (state, actions) => {
      let updatedArray = state.filter((user) => user._id != actions.payload);
      state = updatedArray;
    },
  },
});

export const { addConnections, removeConnection } = connectionsSlice.actions;
export default connectionsSlice.reducer;
