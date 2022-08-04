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
        return data;
      } catch (error) {
        return rejectWithValue(errorFunc(error))
      }
    }
  ),
  getToById: createAsyncThunk(
    'TODO/getToById',
    async (arg: string, { rejectWithValue }) => {
      try {
        const { data } = await API.post(`/todos/${arg}`)
        return data;
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
        const { data } = await API.post(`/todos/${arg.id}`, todoData)
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
        const { data } = await API.post(`/todos/${arg}`)
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

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePassword = (password: string) => {
  return password.length >= 8 ? password : null;
}
