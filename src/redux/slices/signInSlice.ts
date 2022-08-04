import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthService} from "../../services/authService";
import {token} from "../../services/api";

type AuthData = {
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
      console.log(token)
      if (token) {
        state.data = { ...initialState.data, token};
      }
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

export const setTokenInStorage = (authData: AuthData) => {
    window.localStorage.setItem('Token', JSON.stringify(authData));
}

const removeTokenInStorage = () => {
    window.localStorage.removeItem('Token');
}
