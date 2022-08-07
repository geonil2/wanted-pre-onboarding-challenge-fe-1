import {createSlice} from "@reduxjs/toolkit";
import {ToDoService} from "../../services/toDoService";
import {ToDoList} from "./toDoListsSlice";

export type ToDoListState = {
  error: string | undefined,
  data: ToDoList,
}

const initialState: ToDoListState = {
  error: '',
  data: {
    title : '',
    content : '',
    id : '',
    createdAt : '',
    updatedAt : ''
  }
}

export const toDoListSlice = createSlice({
  name: 'TODOLIST',
  initialState,
  reducers: {
    // showList(state, action) {
    //   state.data = action.payload;
    //   state.error = '';
    // }
  },
  extraReducers: (builder) => {
    builder
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
        state.data = action.payload.data;
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
        state.data = initialState.data;
        state.error = '';
      })
      .addCase(ToDoService.deleteToDo.rejected, (state, action) => {
        state.data = initialState.data;
        if (action.payload) {
          state.error = action.payload as string;
        } else {
          state.error = 'Something went wrong.'
        }
      })
  }
})


// export const { showList } = toDoListSlice.actions;
