import { configureStore } from "@reduxjs/toolkit";
import repoReducer from "../Features/RepoSlice";

export const store = configureStore({
  reducer: {
    repo: repoReducer,
  },
});

export default store;
