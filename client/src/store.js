import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: applyMiddleware,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
