import {createSlice} from "@reduxjs/toolkit";
import {ToDoService} from "../../services/toDoService";

export type ToDoList = {
  title: string,
  content: string,
  id: string,
  createdAt: string,
  updatedAt: string,
}

export type ToDoListState = {
  error: string | undefined,
  data: ToDoList[] | ToDoList,
}

const initialState: ToDoListState = {
  error: '',
  data: [{
    title : '',
    content : '',
    id : '',
    createdAt : '',
    updatedAt : ''
  }]
}

export const toDoSlice = createSlice({
  name: 'TODO',
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
      .addCase(ToDoService.getToById.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = '';
      })
      .addCase(ToDoService.getToById.rejected, (state, action) => {
        state.data = initialState.data;
        if (action.payload) {
          state.error = action.payload as string;
        } else {
          state.error = 'Something went wrong.'
        }
      })
      .addCase(ToDoService.createToDo.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = '';
      })
      .addCase(ToDoService.createToDo.rejected, (state, action) => {
        state.data = initialState.data;
        if (action.payload) {
          state.error = action.payload as string;
        } else {
          state.error = 'Something went wrong.'
        }
      })
      .addCase(ToDoService.updateToDo.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = '';
      })
      .addCase(ToDoService.updateToDo.rejected, (state, action) => {
        state.data = initialState.data;
        if (action.payload) {
          state.error = action.payload as string;
        } else {
          state.error = 'Something went wrong.'
        }
      })
      .addCase(ToDoService.deleteToDo.fulfilled, (state, action) => {
        // state.data = action.payload;
        // state.error = '';
      })
      .addCase(ToDoService.updateToDo.rejected, (state, action) => {
        state.data = initialState.data;
        if (action.payload) {
          state.error = action.payload as string;
        } else {
          state.error = 'Something went wrong.'
        }
      })
  }
})
