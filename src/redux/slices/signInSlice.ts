import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthService} from "../../services/authService";
import {getTokenInStorage, removeTokenInStorage, setTokenInStorage} from "../../utils/auth";

export type AuthData = {
  message: string,
  token: string
}

export type SignInState = {
  loading: boolean,
  error: string | undefined,
  data: AuthData,
}

const initialState: SignInState = {
  loading: false,
  error: '',
  data: {
    message: '',
    token: ''
  }
}

export const authSlice = createSlice({
  name: 'AUTH',
  initialState,
  reducers: {
    signOut(state) {
      removeTokenInStorage();
      state.loading = false;
      state.error = '';
      state.data = initialState.data;
    },
    autoLogIn(state) {
      const token = getTokenInStorage();
      console.log(token, '!@#!@#!@#!@#')
      token ? state.data = { ...initialState.data, token} : state.error = 'Please try login'
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(AuthService.logIn.pending, (state, action) => {
        state.loading = true;
        state.error = '';
        state.data = initialState.data;
      })
      .addCase(AuthService.logIn.fulfilled, (state, action) => {
        state.loading = false;
        setTokenInStorage(action.payload.token)
        state.data = action.payload;
        state.error = '';
      })
      .addCase(AuthService.logIn.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload as string;
        } else {
          state.error = 'Something went wrong.'
        }
      })
      .addCase(AuthService.signUp.pending, (state) => {
        state.loading = true;
        state.error = '';
        state.data = initialState.data;
      })
      .addCase(AuthService.signUp.fulfilled, (state, action) => {
        state.loading = false;
        setTokenInStorage(action.payload.token)
        state.data = action.payload;
        state.error = '';
      })
      .addCase(AuthService.signUp.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload as string;
        } else {
          state.error = 'Something went wrong.'
        }
      })
  }
});

export const { signOut, autoLogIn } = authSlice.actions;
