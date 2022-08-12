import {AuthData} from "../redux/slices/signInSlice";

export const setTokenInStorage = (authData: AuthData) => {
  localStorage.setItem('Token', JSON.stringify(authData));
}

export const getTokenInStorage = () => {
  const tokenInStorage = localStorage.getItem('Token');
  return tokenInStorage ? JSON.parse(tokenInStorage) : '';
}

export const removeTokenInStorage = () => {
  localStorage.removeItem('Token');
}
