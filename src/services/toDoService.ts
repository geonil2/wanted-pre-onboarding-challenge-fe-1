import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";
import {API, errorFunc} from "./api";

export type ToDoData = {
  title: string,
  content: string
}

export type updateToDoData = ToDoData & {
  id?: string
}

export const ToDoService = {
  getToDos: createAsyncThunk(
    'TODO/getToDos',
    async (arg, { rejectWithValue }) => {
      try {
        const { data } = await API.get('/todos')
        return data.data;
      } catch (error) {
        return rejectWithValue(errorFunc(error))
      }
    }
  ),
  getToById: createAsyncThunk(
    'TODO/getToById',
    async (arg: string, { rejectWithValue }) => {
      try {
        const { data } = await API.get(`/todos/${arg}`)
        console.log(data)
        return data.data;
      } catch (error) {
        return rejectWithValue(errorFunc(error))
      }
    }
  ),
  createToDo: createAsyncThunk(
    'TODO/createToDo',
    async (arg: ToDoData, { dispatch, rejectWithValue }) => {
      try {
        const { data } = await API.post('/todos', arg)
        if (data) {
          dispatch(ToDoService.getToDos());
        }
        return data;
      } catch (error) {
        return rejectWithValue(errorFunc(error))
      }
    }
  ),
  updateToDo: createAsyncThunk(
    'TODO/updateToDo',
    async (arg: updateToDoData, { dispatch, rejectWithValue }) => {
      try {
        const todoData = delete {...arg}.id
        const { data } = await API.put(`/todos/${arg.id}`, todoData)
        if (data) {
          dispatch(ToDoService.getToDos());
        }
        return data;
      } catch (error) {
        return rejectWithValue(errorFunc(error))
      }
    }
  ),
  deleteToDo: createAsyncThunk(
    'TODO/deleteToDo',
    async (arg: string, { dispatch, rejectWithValue }) => {
      try {
        const { data } = await API.delete(`/todos/${arg}`)
        if (data) {
          dispatch(ToDoService.getToDos());
        }
        return data;
      } catch (error) {
        return rejectWithValue(errorFunc(error))
      }
    }
  )
}
