import { createAsyncThunk } from "@reduxjs/toolkit";
import {API, errorFunc} from "./api";

export type User = {
  email: string,
  password: string
}

export const AuthService = {
  logIn: createAsyncThunk(
    'AUTH/logIn',
    async (arg: User, { rejectWithValue }) => {
      try {
        const { data } = await API.post('/users/login', arg)
        return data;
      } catch (error) {
        return rejectWithValue(errorFunc(error))
      }
    }
  ),
  signUp: createAsyncThunk(
    'AUTH/signUp',
    async (arg: User, { rejectWithValue }) => {
      try {
        const { data } = await API.post('/users/create', arg)
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

// Refactoring
export const AuthService2 = {
  logIn: async (user: User) => {
    const { data } = await API.post('/users/login', user);
    return data
  },
  signUp: async (user: User) => {
    const { data } = await API.post('/users/create', user)
    return data;
  },
}

