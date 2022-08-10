import React, {useEffect, useState} from 'react';
import {FormType} from "../components/authForm";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {AuthService, User, validateEmail, validatePassword} from "../services/authService";
import {useNavigate} from "react-router-dom";

interface UseFormProps {
  initialState: User;
  // handleSubmit: (form: FormType?) => void;
  // validate: (form: FormType) => FormType;
}

const useForm = ({ initialState }: UseFormProps) => {
  const { data } = useAppSelector(state => state.authSlice);
  const dispatch = useAppDispatch();
  const [formType, setFormType] = useState<FormType>("Log In")
  const [userInputState, setUserState] = useState<User>(initialState);
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const navigate = useNavigate();

  const enterUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserState(prev => ({ ...prev, [id]: value }))
  }

  const handleFormType = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setUserState({ email: '', password: '' })
    formType === 'Log In' ? setFormType('Sign Up') : setFormType('Log In');
  }

  const validateUserInfo = () => {
    const email = validateEmail(userInputState.email);
    const password = validatePassword(userInputState.password);
    return email && password ? setIsDisabledButton(false) : setIsDisabledButton(true);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formType === 'Log In' ? dispatch(AuthService.logIn(userInputState)) : dispatch(AuthService.signUp(userInputState))
  }

  useEffect(() => {
    validateUserInfo();
  }, [userInputState])

  useEffect(() => {
    if (data.token) navigate('/');
  }, [data])

  return { userInputState, formType, handleFormType, isDisabledButton, enterUserInfo, handleSubmit };
};

export default useForm;
