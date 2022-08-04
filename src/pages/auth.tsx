import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {AuthService, UserData, validateEmail, validatePassword} from "../services/authService";
import SignUp from "../components/signUp";
import LogIn from "../components/logIn";
import {useNavigate} from "react-router-dom";

const Auth = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [userInfo, setUserInfo] = useState<UserData>({ email: '', password: '' });
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(true);
  const { error, data } = useAppSelector(state => state.authSlice);
  const navigate = useNavigate();

  const validateInputData = () => {
    const email = validateEmail(userInfo.email);
    const password = validatePassword(userInfo.password);
    return email && password ? setSubmitBtnDisabled(false) : setSubmitBtnDisabled(true);
  }

  useEffect(() => {
    validateInputData();
  }, [userInfo])

  useEffect(() => {
    if (data.token) {
      navigate('/')
    }
  }, [data])

  return (
    <section className="sm:w-[400px] w-[250px] h-1/2 flex flex-col justify-center items-center bg-white duration-200 p-5 drop-shadow-[0_35px_35px_rgba(25,93,174,1)]">
      {showSignUp ?
        <SignUp
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          setShowSignUp={setShowSignUp}
          submitBtnDisabled={submitBtnDisabled}
        /> :
        <LogIn
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          setShowSignUp={setShowSignUp}
          submitBtnDisabled={submitBtnDisabled}
        />}
    </section>
  );
};

export default Auth;
