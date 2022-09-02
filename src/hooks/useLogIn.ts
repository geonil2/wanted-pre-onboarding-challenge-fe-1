import {useMutation, UseMutationOptions} from "@tanstack/react-query";
import {AuthService2, User} from "../services/authService";
import {setTokenInStorage} from "../utils/auth";
import {useNavigate} from "react-router-dom";
import {errorFunc} from "../services/api";
import onMsg from "../utils/msg";

const UseLogIn = () => {
  const navigate = useNavigate();

  return useMutation(AuthService2.logIn, {
    onSuccess: (data) => {
      console.log(data, 'data...')
      setTokenInStorage(data.token);
      navigate('/');
    },
    onError: (error) => {
      console.log(error, 'error')
      // const errorMsg = errorFunc(error);
      onMsg('로그인에 실패했습니다.', "error");
    }
  });
};

export default UseLogIn;
