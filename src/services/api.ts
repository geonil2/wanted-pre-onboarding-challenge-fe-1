import axios, {AxiosError, AxiosInstance} from "axios";
import {getTokenInStorage} from "../utils/auth";
import {useAppSelector} from "../redux/store";

// const tokenInStorage = localStorage.getItem('Token');
// export const token = tokenInStorage ? JSON.parse(tokenInStorage) : '';

export const API = axios.create({
  baseURL: 'http://localhost:8080',
});

API.interceptors.request.use(
  function (config) {
    const token = getTokenInStorage();
    const headers = {
      Accept: "application/json",
      Authorization: token ? `Bearer ${token}` : '',
    };
    console.log(headers, '1!!')
    config.headers = headers;
    return config;
  },
  function (error) {
    // 요청 에러 직전 호출
    return Promise.reject(error);
  },
);

export const errorFunc = (error: any) => {
  if (error instanceof AxiosError && error.response) {
    if (typeof error.response.data.details !== 'undefined') {
      return error.response.data.details;
    }
    return error.response.data;
  }
  throw error;
}
