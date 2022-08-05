import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Todo from "../pages/todo";
import Home from "../pages/home";
import Auth from "../pages/auth";
import PrivateRoute from "../components/privateRoute";

const Main = () => {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center text-[#1b1b1b] bg-white pt-[40px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/todo" element={<PrivateRoute path="/todo" element={<Todo />}/>} />
      </Routes>
    </main>
  );
};

export default Main;
