import {useMutation} from "@tanstack/react-query";
import {AuthService2, User} from "../services/authService";
import {AxiosError} from "axios";
import {setTokenInStorage} from "../utils/auth";
import {useNavigate} from "react-router-dom";
import {errorFunc} from "../services/api";

const UseLogIn = () => {
  const navigate = useNavigate();

  return useMutation((user: User) => AuthService2.signUp(user), {
    onSuccess: (data) => {
      setTokenInStorage(data.token);
      navigate('/');
    },
    onError: (error) => {
      errorFunc(error);
    }
  });
};

export default UseLogIn;
