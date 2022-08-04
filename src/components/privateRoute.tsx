import React, {ReactElement} from 'react';
import {Navigate, Route, useNavigate} from "react-router-dom";
import {useAppSelector} from "../redux/store";

const PrivateRoute = ({ path, element } : {path: string, element: React.ReactNode}) => {
  const { data } = useAppSelector(state => state.authSlice);
  return data.token ? <>{element}</> : <Navigate to="/" />
};

export default PrivateRoute;
