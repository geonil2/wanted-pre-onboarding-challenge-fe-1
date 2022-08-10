// import React, {useEffect, useState} from 'react';
// import {AuthService, User, validateEmail, validatePassword} from "../services/authService";
// import {useAppDispatch, useAppSelector} from "../redux/store";
// import {useNavigate} from "react-router-dom";
//
// type FormType = "Log In" | "Sign Up";
//
// const AuthForm = () => {
//   const { data } = useAppSelector(state => state.authSlice);
//   const dispatch = useAppDispatch();
//   const [formType, setFormType] = useState<FormType>("Log In")
//   const [userInputState, setUserState] = useState<User>({ email: '', password: '' });
//   const [isDisabledButton, setIsDisabledButton] = useState(true);
//   const navigate = useNavigate();
//
//   const enterUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { id, value } = e.target;
//     setUserState(prev => ({ ...prev, [id]: value }))
//   }
//
//   const handleFormType = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     setUserState({ email: '', password: '' })
//     formType === 'Log In' ? setFormType('Sign Up') : setFormType('Log In');
//   }
//
//   const validateUserInfo = () => {
//     const email = validateEmail(userInputState.email);
//     const password = validatePassword(userInputState.password);
//     return email && password ? setIsDisabledButton(false) : setIsDisabledButton(true);
//   }
//
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     formType === 'Log In' ? dispatch(AuthService.logIn(userInputState)) : dispatch(AuthService.signUp(userInputState))
//   }
//
//   useEffect(() => {
//     validateUserInfo();
//   }, [userInputState])
//
//   useEffect(() => {
//     formType === 'Log In' ? setFormType('Sign Up') : setFormType('Log In');
//     if (data.token) navigate('/');
//   }, [data])
//
//   return (
//     <form className="w-full" onSubmit={handleSubmit}>
//       <div className="flex justify-center items-center pb-10">
//         <div className="text-xl text-[#195dae] font-bold">To Do List</div>
//       </div>
//       <div className="w-full">
//         <div className="flex justify-between item-center pb-2">
//           <label className="w-[20%]" htmlFor="email">E-MAIL</label>
//           <div className="w-[75%]">
//             <input
//               id="email"
//               type="text"
//               value={userInputState.email}
//               onChange={enterUserInfo}
//               className="w-full text-sm bg-transparent border border-solid border-[#1B1B1B] p-1 focus:border-[#195dae]"
//             />
//           </div>
//         </div>
//         <div className="flex justify-between item-center pb-2">
//           <label className="w-[20%]" htmlFor="password">PASSWORD</label>
//           <div className="w-[75%]">
//             <input
//               id="password"
//               type="password"
//               value={userInputState.password}
//               onChange={enterUserInfo}
//               className="w-full text-sm bg-transparent border border-solid border-[#1B1B1B] p-1 focus:border-[#195dae]"
//             />
//           </div>
//         </div>
//         <div className="flex justify-between items-center">
//           <button
//             type="submit"
//             disabled={isDisabledButton}
//             className={`${!isDisabledButton ? 'text-[#195dae] border-[#195dae] hover:bg-[#195dae] hover:text-white' : 'text-[#195dae70] border-[#195dae70]'} w-1/2 h-10 border border-solid rounded-xl duration-200 mt-5 ml-1`}
//           >{formType}</button>
//           <button
//             type="button"
//             onClick={handleFormType}
//             className={`w-1/2 h-10 flex justify-center items-center text-[#195dae] border border-solid border-[#195dae] rounded-xl duration-200 mt-5 ml-1 hover:bg-[#195dae] hover:text-white`}
//           >{formType === 'Log In' ? 'Sign Up' : 'Log In'}</button>
//         </div>
//       </div>
//     </form>
//   );
// };
//
// export default AuthForm;

import React, {useEffect, useState} from 'react';
import {AuthService, User, validateEmail, validatePassword} from "../services/authService";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {useNavigate} from "react-router-dom";
import useForm from "../hooks/useForm";

export type FormType = "Log In" | "Sign Up";

const AuthForm = () => {
  const { userInputState, formType, handleFormType, isDisabledButton, enterUserInfo, handleSubmit } = useForm({
    initialState: { email: "", password: "" }
  })

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex justify-center items-center pb-10">
        <div className="text-xl text-[#195dae] font-bold">To Do List</div>
      </div>
      <div className="w-full">
        <div className="flex justify-between item-center pb-2">
          <label className="w-[20%]" htmlFor="email">E-MAIL</label>
          <div className="w-[75%]">
            <input
              id="email"
              type="text"
              value={userInputState.email}
              onChange={enterUserInfo}
              className="w-full text-sm bg-transparent border border-solid border-[#1B1B1B] p-1 focus:border-[#195dae]"
            />
          </div>
        </div>
        <div className="flex justify-between item-center pb-2">
          <label className="w-[20%]" htmlFor="password">PASSWORD</label>
          <div className="w-[75%]">
            <input
              id="password"
              type="password"
              value={userInputState.password}
              onChange={enterUserInfo}
              className="w-full text-sm bg-transparent border border-solid border-[#1B1B1B] p-1 focus:border-[#195dae]"
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            disabled={isDisabledButton}
            className={`${!isDisabledButton ? 'text-[#195dae] border-[#195dae] hover:bg-[#195dae] hover:text-white' : 'text-[#195dae70] border-[#195dae70]'} w-1/2 h-10 border border-solid rounded-xl duration-200 mt-5 ml-1`}
          >{formType}</button>
          <button
            type="button"
            onClick={handleFormType}
            className={`w-1/2 h-10 flex justify-center items-center text-[#195dae] border border-solid border-[#195dae] rounded-xl duration-200 mt-5 ml-1 hover:bg-[#195dae] hover:text-white`}
          >{formType === 'Log In' ? 'Sign Up' : 'Log In'}</button>
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
