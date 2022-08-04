import {combineReducers} from "@reduxjs/toolkit";
import {authSlice} from "./signInSlice";

const rootReducer = combineReducers({
  authSlice: authSlice.reducer,
})

export default rootReducer;
