import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import feedSlice from "./feedSlice";

const appStrore = configureStore({
  reducer: {
    user: userSlice,
    feed: feedSlice,
  },
});

export default appStrore;
