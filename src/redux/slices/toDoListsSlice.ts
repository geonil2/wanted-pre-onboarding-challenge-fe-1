import {createSlice} from "@reduxjs/toolkit";
import {ToDoService} from "../../services/toDoService";

export type ToDoList = {
  title: string,
  content: string,
  id: string,
  createdAt: string,
  updatedAt: string,
}

export type ToDoListsState = {
  error: string | undefined,
  data: ToDoList[],
}

const initialState: ToDoListsState = {
  error: '',
  data: [{
    title : '',
    content : '',
    id : '',
    createdAt : '',
    updatedAt : ''
  }]
}

export const toDoListsSlice = createSlice({
  name: 'TODOLISTS',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ToDoService.getToDos.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = '';
      })
      .addCase(ToDoService.getToDos.rejected, (state, action) => {
        state.data = initialState.data;
        if (action.payload) {
          state.error = action.payload as string;
        } else {
          state.error = 'Something went wrong.'
        }
      })
  }
})
