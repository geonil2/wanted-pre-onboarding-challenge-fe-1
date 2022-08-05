import {combineReducers} from "@reduxjs/toolkit";
import {authSlice} from "./signInSlice";
import {toDoListsSlice} from "./toDoListsSlice";
import {toDoListSlice} from "./toDoListSlice";

const rootReducer = combineReducers({
  authSlice: authSlice.reducer,
  toDoListsSlice: toDoListsSlice.reducer,
  toDoListSlice: toDoListSlice.reducer,
})

export default rootReducer;
