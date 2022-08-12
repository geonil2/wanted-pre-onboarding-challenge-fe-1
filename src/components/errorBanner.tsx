import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../redux/store";
import {useNavigate} from "react-router-dom";

const ErrorBanner = () => {
  const [error, setError] = useState('');
  const authSlice = useAppSelector(state => state.authSlice);
  const toDoListsSlice = useAppSelector(state => state.toDoListsSlice);
  const toDoListSlice = useAppSelector(state => state.toDoListSlice);
  const navigate = useNavigate();

  const showError = (error: string) => {
    setError(error);
    setTimeout(() => {
      setError('');
    }, 3000)
  }

  useEffect(() => {
    if (authSlice.error) showError(authSlice.error);
    if (toDoListsSlice.error) showError(toDoListsSlice.error);
    if (toDoListSlice.error) showError(toDoListSlice.error);
    navigate('/auth');
  }, [authSlice.error, toDoListsSlice.error, toDoListSlice.error])

  return (
    <div className="w-full text-white bg-red-600 px-2">
      {error ?
        <p className="text-center py-1">{error}</p> : null
      }
    </div>
  );
};

export default ErrorBanner;
