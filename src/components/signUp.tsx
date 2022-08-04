import React from 'react';
import {AuthService, UserData} from "../services/authService";
import {useAppDispatch} from "../redux/store";

const SignUp = ({userInfo, setUserInfo, setShowSignUp, submitBtnDisabled} : {userInfo: UserData, setUserInfo: React.Dispatch<React.SetStateAction<UserData>>, setShowSignUp: React.Dispatch<React.SetStateAction<boolean>>, submitBtnDisabled: boolean}) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex justify-center items-center pb-10">
        <div className="">Sign Up</div>
      </div>
      <div className="w-full">
        <div className="flex justify-between item-center pb-2">
          <label className="w-[20%]" htmlFor="email">E-MAIL</label>
          <div className="w-[75%]">
            <input
              id="email"
              type="text"
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
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
              value={userInfo.password}
              onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
              className="w-full text-sm bg-transparent border border-solid border-[#1B1B1B] p-1 focus:border-[#195dae]"
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button
            disabled={submitBtnDisabled}
            onClick={() => dispatch(AuthService.signUp(userInfo))}
            className={`${!submitBtnDisabled ? 'text-[#195dae] border-[#195dae] hover:bg-[#195dae] hover:text-white' : 'text-[#195dae70] border-[#195dae70]'} w-1/2 h-10 border border-solid rounded-xl duration-200 mt-5 ml-1`}
          >Sign Up</button>
          <button
            onClick={() => setShowSignUp(false)}
            className={`w-1/2 h-10 flex justify-center items-center text-[#195dae] border border-solid border-[#195dae] rounded-xl duration-200 mt-5 ml-1 hover:bg-[#195dae] hover:text-white`}
          >Sign In</button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
