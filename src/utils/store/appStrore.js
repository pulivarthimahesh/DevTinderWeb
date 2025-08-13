import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const appStrore = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default appStrore;
