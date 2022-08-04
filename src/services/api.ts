import axios, {AxiosError} from "axios";

const tokenInStorage = localStorage.getItem('Token')
export const token = tokenInStorage ? JSON.parse(tokenInStorage) : '';

export const API = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const errorFunc = (error: any) => {
  if (error instanceof AxiosError && error.response) {
    if (typeof error.response.data.details !== 'undefined') {
      return error.response.data.details;
    }
    return error.response.data;
  }
  throw error;
}
