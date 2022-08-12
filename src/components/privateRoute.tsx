import React from 'react';
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../redux/store";

const PrivateRoute = ({ children } : { children: JSX.Element }) => {
  const { data } = useAppSelector(state => state.authSlice);
  console.log(data.token, children, '!@!@')
  return data.token ? <>{children}</> : <Navigate to="/" />
};

export default PrivateRoute;
