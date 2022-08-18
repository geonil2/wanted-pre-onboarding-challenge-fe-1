import React from 'react';
import useAuthForm from "../hooks/useAuthForm";

export type FormType = "Log In" | "Sign Up";

const AuthForm = () => {
  const {
    userInputState,
    formType,
    handleFormType,
    isDisabledButton,
    enterUserInfo,
    handleSubmit
  } = useAuthForm({
    initialState: { email: "", password: "" }
  });

  return (
    <form
      className="sm:w-[400px] w-[250px] h-1/2 flex flex-col justify-center items-center bg-white duration-200 p-5 drop-shadow-[0_35px_35px_rgba(25,93,174,1)]"
      onSubmit={handleSubmit}
    >
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
              autoComplete="username"
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
              autoComplete="current-password"
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
