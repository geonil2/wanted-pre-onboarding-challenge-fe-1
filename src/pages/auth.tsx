import React from 'react';
import AuthForm from "../components/authForm";

const Auth = () => {
  return (
    <section className="sm:w-[400px] w-[250px] h-1/2 flex flex-col justify-center items-center bg-white duration-200 p-5 drop-shadow-[0_35px_35px_rgba(25,93,174,1)]">
      <AuthForm />
    </section>
  );
};

export default Auth;
